import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qsx-i1f6n.css';
import '../../css/u/u9j9k8igd.css';
import '../../css/k/k5v3mxbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="qsx-i1f6n wm-k"/><path class="u9j9k8igd wm-k"/><path class="k5v3mxbhe wm-shine"/></g>`,
		"fallback": "withicons-christmas:split",
	});
}

export default Component;
