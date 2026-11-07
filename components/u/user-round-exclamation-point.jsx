import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p4ey7kvtq.css';
import '../../css/q/qcs_7qqsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p4ey7kvtq"/><circle class="qcs_7qqsg"/></g>`,
		"fallback": "lucide:user-round-exclamation-point",
	});
}

export default Component;
