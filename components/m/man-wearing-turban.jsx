import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nl9-wfx1d.css';
import '../../css/k/kdz2xnbov.css';
import '../../css/y/yynntrfxl.css';
import '../../css/e/elec4kyjy.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)" class="cuyn6tgcc"><path class="nl9-wfx1d"/><path class="kdz2xnbov"/><path class="yynntrfxl"/><path class="elec4kyjy"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`,
		"fallback": "fluent-emoji-high-contrast:man-wearing-turban",
	});
}

export default Component;
