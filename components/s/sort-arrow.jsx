import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuelntopd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuelntopd"/>`,
		"fallback": "lets-icons:sort-arrow",
	});
}

export default Component;
