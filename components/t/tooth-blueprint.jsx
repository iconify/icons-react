import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v7rdxtb5l.css';
import '../../css/u/ukspx9b-m.css';
import '../../css/d/d8p35_05q.css';
import '../../css/e/epy7lbxae.css';
import '../../css/q/q0hy0qr9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="v7rdxtb5l wm-deco"/><path class="ukspx9b-m wm-deco"/><path class="d8p35_05q wm-deco"/><path class="epy7lbxae"/><path class="q0hy0qr9z"/></g>`,
		"fallback": "withicons:tooth-blueprint",
	});
}

export default Component;
