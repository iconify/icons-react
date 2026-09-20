import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s4y_jrbmi.css';
import '../../css/g/gdioz716d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="s4y_jrbmi"/><path class="gdioz716d"/></g>`,
		"fallback": "streamline-plump:justice-scale-2",
	});
}

export default Component;
