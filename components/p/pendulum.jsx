import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7p5pp0nv.css';
import '../../css/q/q0s0p9jij.css';
import '../../css/q/qqi_n9gdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7p5pp0nv"/><path class="q0s0p9jij"/><path class="qqi_n9gdx"/></g>`,
		"fallback": "andrsrxn:pendulum",
	});
}

export default Component;
