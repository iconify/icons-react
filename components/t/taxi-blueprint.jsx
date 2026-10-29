import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hx4bnxbxl.css';
import '../../css/r/r0vh99iju.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/q/qm17i3bik.css';
import '../../css/g/gsm21sbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hx4bnxbxl wm-deco"/><path class="r0vh99iju wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="qm17i3bik wm-k"/><path class="gsm21sbrt wm-a"/></g>`,
		"fallback": "withicons:taxi-blueprint",
	});
}

export default Component;
