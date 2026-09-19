import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dc2q30b4b.css';
import '../../css/i/i8brhubna.css';
import '../../css/c/c_6r__y3w.css';
import '../../css/d/dko712rsi.css';

const viewBox = {"width":302,"height":160};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dc2q30b4b"/><path class="i8brhubna"/><path class="c_6r__y3w"/><path class="dko712rsi"/></g>`,
		"fallback": "cif:mh",
	});
}

export default Component;
