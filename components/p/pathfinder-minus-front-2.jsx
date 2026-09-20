import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sty_d2q5q.css';
import '../../css/f/fkklvacru.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sty_d2q5q"/><path class="fkklvacru"/></g>`,
		"fallback": "streamline-flex:pathfinder-minus-front-2",
	});
}

export default Component;
