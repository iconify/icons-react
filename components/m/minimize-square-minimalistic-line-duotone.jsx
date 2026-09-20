import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wf89k6buf.css';
import '../../css/e/ekycqtc3s.css';
import '../../css/d/d93m-hbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wf89k6buf"/><path class="ekycqtc3s"/><path class="d93m-hbpm"/></g>`,
		"fallback": "solar:minimize-square-minimalistic-line-duotone",
	});
}

export default Component;
