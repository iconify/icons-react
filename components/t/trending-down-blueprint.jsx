import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rlnnxobai.css';
import '../../css/i/i2ddy7fru.css';
import '../../css/u/u3gfgccil.css';
import '../../css/w/w47x50q8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rlnnxobai wm-deco"/><path class="i2ddy7fru wm-deco"/><path class="u3gfgccil"/><path class="w47x50q8w"/></g>`,
		"fallback": "withicons:trending-down-blueprint",
	});
}

export default Component;
