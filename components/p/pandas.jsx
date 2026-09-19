import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-e44lb4l.css';
import '../../css/z/z-7b66bwm.css';
import '../../css/w/w_6z06rni.css';
import '../../css/q/q_atkdb-c.css';
import '../../css/l/luz-girsp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-e44lb4l"/><path class="z-7b66bwm"/><path class="w_6z06rni"/><path class="q_atkdb-c"/><path class="luz-girsp"/>`,
		"fallback": "devicon:pandas",
	});
}

export default Component;
