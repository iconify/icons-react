import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jbeyhdbgx.css';
import '../../css/h/hbaow-b7m.css';
import '../../css/d/dkcq8bbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jbeyhdbgx"/><path class="hbaow-b7m"/><path class="dkcq8bbuu"/></g>`,
		"fallback": "hugeicons:taco-01",
	});
}

export default Component;
