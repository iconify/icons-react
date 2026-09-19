import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf539cbsg.css';
import '../../css/g/gzff54bpk.css';
import '../../css/u/ucy902b6e.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 995.638)" class="nf539cbsg"><circle class="gzff54bpk"/><circle class="ucy902b6e"/></g>`,
		"fallback": "bpmn:intermediate-event-non-interrupting",
	});
}

export default Component;
