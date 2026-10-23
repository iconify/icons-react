import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp47o4bmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp47o4bmz"/>`,
		"fallback": "vadivam:unlink-2",
	});
}

export default Component;
