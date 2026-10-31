import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t476wo57g.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/hk4_ptb-x.css';
import '../../css/m/m04i1k8ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t476wo57g"/><g class="mc2zb0bvp"><circle class="hk4_ptb-x"/><path class="m04i1k8ue"/></g></g>`,
		"fallback": "struq:remind",
	});
}

export default Component;
