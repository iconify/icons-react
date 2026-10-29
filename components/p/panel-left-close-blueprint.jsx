import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hv8fxdvrh.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/f/fz9wbhbib.css';
import '../../css/p/phr4i2wxy.css';
import '../../css/j/j-4i0l2fr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hv8fxdvrh wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="fz9wbhbib wm-k"/><path class="phr4i2wxy wm-a"/><path class="j-4i0l2fr wm-a"/></g>`,
		"fallback": "withicons:panel-left-close-blueprint",
	});
}

export default Component;
