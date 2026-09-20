import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx5d-bc1s.css';
import '../../css/h/hd70nsb5x.css';
import '../../css/u/u2hv0zbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nx5d-bc1s"><path class="hd70nsb5x"/><path class="u2hv0zbsy"/></g>`,
		"fallback": "thesvg-color:model-context-protocol-dark",
	});
}

export default Component;
