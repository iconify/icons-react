import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtz3jbcyb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtz3jbcyb"/>`,
		"fallback": "game-icons:walther-ppk",
	});
}

export default Component;
