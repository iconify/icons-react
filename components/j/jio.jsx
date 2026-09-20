import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uotc3ccaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uotc3ccaf"/>`,
		"fallback": "thesvg-color:jio",
	});
}

export default Component;
