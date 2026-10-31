import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q1qzyoe_f.css';
import '../../css/o/oc7ra1pma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q1qzyoe_f"/><path class="oc7ra1pma"/></g>`,
		"fallback": "coolicons:link-horizontal-duocolor-round",
	});
}

export default Component;
