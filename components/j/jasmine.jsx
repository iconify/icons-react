import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy5b588xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy5b588xb"/>`,
		"fallback": "thesvg:jasmine",
	});
}

export default Component;
