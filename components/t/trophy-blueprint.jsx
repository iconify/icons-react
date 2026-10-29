import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s4cfjypce.css';
import '../../css/s/sbsfawmcu.css';
import '../../css/d/dlmywhbph.css';
import '../../css/i/ieoysimau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="s4cfjypce wm-deco"/><path class="sbsfawmcu wm-deco"/><path class="dlmywhbph wm-deco"/><path class="ieoysimau"/></g>`,
		"fallback": "withicons:trophy-blueprint",
	});
}

export default Component;
