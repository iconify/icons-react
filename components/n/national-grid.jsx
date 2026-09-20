import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c84_js1xt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c84_js1xt"/>`,
		"fallback": "thesvg-color:national-grid",
	});
}

export default Component;
