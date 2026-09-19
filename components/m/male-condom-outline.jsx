import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ng2dgobmr.css';
import '../../css/c/c4ew_ccan.css';
import '../../css/d/d75k3fbhg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ng2dgobmr"/><path class="c4ew_ccan"/><path class="d75k3fbhg"/></g>`,
		"fallback": "healthicons:male-condom-outline",
	});
}

export default Component;
