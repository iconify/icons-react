import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gz61a7bkh.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/e/e8y0qijnn.css';
import '../../css/q/qmf8_bm9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gz61a7bkh wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="e8y0qijnn wm-k"/><path class="qmf8_bm9e wm-a"/></g>`,
		"fallback": "withicons:milk-blueprint",
	});
}

export default Component;
