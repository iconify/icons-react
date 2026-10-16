import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1pekhtvh.css';
import '../../css/g/gipfg7brd.css';
import '../../css/l/le6qx_s4l.css';
import '../../css/m/mpz045b2n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1pekhtvh"/><path class="gipfg7brd"/><path class="le6qx_s4l"/><path class="mpz045b2n"/>`,
		"fallback": "energy-icons:shovel-20",
	});
}

export default Component;
