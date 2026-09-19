import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_bsnpbbl.css';
import '../../css/j/j7f3w3rlj.css';
import '../../css/s/sdf8cb9as.css';
import '../../css/a/arfms3bcp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="h_bsnpbbl"/><circle class="j7f3w3rlj"/><circle class="sdf8cb9as"/><path class="arfms3bcp"/>`,
		"fallback": "carbon:intent-request-inactive",
	});
}

export default Component;
