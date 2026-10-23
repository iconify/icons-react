import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkrn0cc1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkrn0cc1a"/>`,
		"fallback": "vadivam:pencil-off",
	});
}

export default Component;
