import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xr_boibjg.css';
import '../../css/n/naw4vq-iv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xr_boibjg"/><path class="naw4vq-iv"/></g>`,
		"fallback": "healthicons:virus-lab-research-syringe2x-outline",
	});
}

export default Component;
