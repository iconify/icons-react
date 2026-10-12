import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsd0dqg8h.css';
import '../../css/f/fj0-3lbac.css';
import '../../css/f/f0-68acbf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsd0dqg8h"/><path class="fj0-3lbac"/><path class="f0-68acbf"/>`,
		"fallback": "energy-icons:torque-wrench-20",
	});
}

export default Component;
