import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lu1ywdb1f.css';
import '../../css/k/knp318bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lu1ywdb1f"/><path class="knp318bux"/></g>`,
		"fallback": "solar:outgoing-call-rounded-line-duotone",
	});
}

export default Component;
