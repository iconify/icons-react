import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0z8wjhfw.css';
import '../../css/a/alnfi4bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0z8wjhfw"/><path class="alnfi4bhr"/>`,
		"fallback": "circum:sun",
	});
}

export default Component;
