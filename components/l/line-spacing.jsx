import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe3j86vbb.css';
import '../../css/i/i8b66go_s.css';
import '../../css/v/vrmdo4bib.css';
import '../../css/i/i771m-bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe3j86vbb"/><path class="i8b66go_s"/><path class="vrmdo4bib"/><path class="i771m-bcf"/>`,
		"fallback": "uim:line-spacing",
	});
}

export default Component;
