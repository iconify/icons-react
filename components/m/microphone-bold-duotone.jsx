import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue2-q7bvs.css';
import '../../css/k/ksp8umbhc.css';
import '../../css/s/s8tc8qojs.css';
import '../../css/c/caa41bcyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue2-q7bvs"/><path class="ksp8umbhc"/><path class="s8tc8qojs"/><path class="caa41bcyj"/>`,
		"fallback": "solar:microphone-bold-duotone",
	});
}

export default Component;
