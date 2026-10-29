import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xlsrwfbva.css';
import '../../css/l/ldpgispni.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/e/epgciubws.css';
import '../../css/x/xaf6cob8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xlsrwfbva"/><path class="ldpgispni wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="epgciubws wm-k"/><path class="wm-a xaf6cob8p"/></g>`,
		"fallback": "withicons:projector-blueprint",
	});
}

export default Component;
