import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s17l2xvsl.css';
import '../../css/o/ow87p7mxd.css';
import '../../css/a/aquyrijyg.css';
import '../../css/q/qeqv90bws.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s17l2xvsl"/><path class="ow87p7mxd"/><path class="aquyrijyg"/><path class="qeqv90bws"/></g>`,
		"fallback": "fluent-emoji-flat:toolbox",
	});
}

export default Component;
