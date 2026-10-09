import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt1fwi76j.css';
import '../../css/b/bfm65zb3s.css';
import '../../css/m/m4sog_j7e.css';
import '../../css/f/fp_b-wf4v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt1fwi76j"/><path class="bfm65zb3s"/><path class="m4sog_j7e"/><path class="fp_b-wf4v"/>`,
		"fallback": "energy-icons:solar-panel-20",
	});
}

export default Component;
