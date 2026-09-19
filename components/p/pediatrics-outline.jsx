import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wle43o55h.css';
import '../../css/q/qubz6zaog.css';
import '../../css/d/dmo352x4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wle43o55h"/><path class="qubz6zaog"/><path clip-rule="evenodd" class="dmo352x4a"/></g>`,
		"fallback": "healthicons:pediatrics-outline",
	});
}

export default Component;
