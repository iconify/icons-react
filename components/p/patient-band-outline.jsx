import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q3z_aobkl.css';
import '../../css/u/ugsdxgb4t.css';
import '../../css/z/zud_9abxg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q3z_aobkl"/><path class="ugsdxgb4t"/><path class="zud_9abxg"/></g>`,
		"fallback": "healthicons:patient-band-outline",
	});
}

export default Component;
