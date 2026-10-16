import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f56vf7bck.css';
import '../../css/k/kqal38fxm.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f56vf7bck"/><path class="kqal38fxm"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:tunnel-20",
	});
}

export default Component;
