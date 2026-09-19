import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0i398m6x.css';
import '../../css/a/ay6c3pb8e.css';
import '../../css/m/msp76tw5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0i398m6x"/><path class="ay6c3pb8e"/><path class="msp76tw5p"/>`,
		"fallback": "flat-color-icons:tree-structure",
	});
}

export default Component;
