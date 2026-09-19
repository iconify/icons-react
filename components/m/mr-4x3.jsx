import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei-fevb0d.css';
import '../../css/g/gefsnvbmp.css';
import '../../css/q/qx32elbez.css';
import '../../css/d/dlkwv-bom.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei-fevb0d"/><path class="gefsnvbmp"/><path class="mr-st1 qx32elbez"/><path class="dlkwv-bom"/>`,
		"fallback": "flag:mr-4x3",
	});
}

export default Component;
