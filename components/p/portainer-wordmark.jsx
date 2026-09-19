import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd7cz3bpd.css';
import '../../css/n/nug4mpmoh.css';
import '../../css/j/jz4svgblm.css';
import '../../css/a/avr4r-bzr.css';
import '../../css/t/t0_u2wenl.css';
import '../../css/z/zioqx9b9y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qd7cz3bpd"><path class="nug4mpmoh"/><path class="jz4svgblm"/><path class="avr4r-bzr"/><path class="t0_u2wenl"/><path class="zioqx9b9y"/></g>`,
		"fallback": "devicon:portainer-wordmark",
	});
}

export default Component;
