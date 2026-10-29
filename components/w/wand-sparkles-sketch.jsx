import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j-h8fsb7z.css';
import '../../css/i/ixiy87sdk.css';
import '../../css/x/xdyx-3bcl.css';
import '../../css/e/ercz5snjv.css';
import '../../css/p/p05bdcbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j-h8fsb7z"/><path class="ixiy87sdk wm-k"/><path class="wm-a xdyx-3bcl"/><path class="ercz5snjv wm-k"/><path class="p05bdcbap wm-a"/></g>`,
		"fallback": "withicons:wand-sparkles-sketch",
	});
}

export default Component;
