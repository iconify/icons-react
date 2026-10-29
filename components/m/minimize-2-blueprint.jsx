import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iacwg347f.css';
import '../../css/b/bxjv56brc.css';
import '../../css/z/znxjuv-vy.css';
import '../../css/z/z11iafbez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="iacwg347f wm-deco"/><path class="bxjv56brc wm-deco"/><path class="znxjuv-vy"/><path class="z11iafbez"/></g>`,
		"fallback": "withicons:minimize-2-blueprint",
	});
}

export default Component;
