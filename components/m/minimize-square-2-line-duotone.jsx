import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ekycqtc3s.css';
import '../../css/d/d93m-hbpm.css';
import '../../css/n/nqk3t3jaw.css';
import '../../css/e/e9e_psbbr.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ekycqtc3s"/><path class="d93m-hbpm"/><path class="nqk3t3jaw"/><path class="e9e_psbbr"/><path class="wf89k6buf"/></g>`,
		"fallback": "solar:minimize-square-2-line-duotone",
	});
}

export default Component;
