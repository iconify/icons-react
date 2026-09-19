import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fc0fm6b8m.css';
import '../../css/l/lafvohbew.css';
import '../../css/k/kqpo86rnc.css';
import '../../css/w/wx0kyqbky.css';
import '../../css/h/h1r8nnbkq.css';
import '../../css/q/ql83mpbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fc0fm6b8m"/><path class="lafvohbew"/><path class="kqpo86rnc"/><path class="wx0kyqbky"/><ellipse class="h1r8nnbkq"/><path class="ql83mpbau"/></g>`,
		"fallback": "hugeicons:real-estate-02",
	});
}

export default Component;
