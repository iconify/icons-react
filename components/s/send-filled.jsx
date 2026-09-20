import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il_najbxg.css';
import '../../css/n/n1lsf0bnc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG2jlUvrhl" class="il_najbxg"/></defs><g clip-rule="evenodd" class="n1lsf0bnc"><use href="#SVG2jlUvrhl"/><use href="#SVG2jlUvrhl"/></g>`,
		"fallback": "lsicon:send-filled",
	});
}

export default Component;
