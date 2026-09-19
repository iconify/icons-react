import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si1zmcbxh.css';
import '../../css/f/fvtlxtbin.css';
import '../../css/o/o16hhbcdh.css';
import '../../css/a/akuniccwg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si1zmcbxh"/><g class="fvtlxtbin"><path class="o16hhbcdh"/><path class="akuniccwg"/></g>`,
		"fallback": "flat-color-icons:low-priority",
	});
}

export default Component;
