import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7vnfusos.css';
import '../../css/i/ia1foupjh.css';
import '../../css/a/ag43tybwg.css';
import '../../css/a/azx8l-8-x.css';
import '../../css/x/xjsvhebnt.css';
import '../../css/b/bf5ccccov.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7vnfusos"/><path class="ia1foupjh"/><path class="ag43tybwg"/><circle class="azx8l-8-x"/><circle class="xjsvhebnt"/><circle class="bf5ccccov"/>`,
		"fallback": "openmoji:salt",
	});
}

export default Component;
