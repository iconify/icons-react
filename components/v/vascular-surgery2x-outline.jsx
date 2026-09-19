import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agayz9gez.css';
import '../../css/h/hs_jfw7_f.css';
import '../../css/a/ah_6m4b9y.css';
import '../../css/z/znqhry37n.css';
import '../../css/q/q-pjf2_2m.css';
import '../../css/x/x3k3alz8i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="agayz9gez"/><path clip-rule="evenodd" class="hs_jfw7_f"/><path clip-rule="evenodd" class="ah_6m4b9y"/><path class="znqhry37n"/><path class="q-pjf2_2m"/><path class="x3k3alz8i"/></g>`,
		"fallback": "healthicons:vascular-surgery2x-outline",
	});
}

export default Component;
