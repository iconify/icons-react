import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1kiis7qb.css';

const viewBox = {"width":1408,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1kiis7qb"/>`,
		"fallback": "vs:user-boss",
	});
}

export default Component;
