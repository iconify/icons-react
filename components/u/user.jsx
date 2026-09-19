import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qepuaqbvx.css';
import '../../css/a/ahhtygbfj.css';
import '../../css/y/ygmil-bru.css';
import '../../css/n/n78cw4bmy.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qepuaqbvx"><path class="ahhtygbfj"/><path class="ygmil-bru"/><path class="n78cw4bmy"/></g>`,
		"fallback": "bpmn:user",
	});
}

export default Component;
