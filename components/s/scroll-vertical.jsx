import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dfl6mp_wq.css';
import '../../css/p/p03-dy-ag.css';
import '../../css/m/mritzmbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dfl6mp_wq"/><path class="p03-dy-ag"/><path class="mritzmbxo"/></g>`,
		"fallback": "streamline-ultimate-color:scroll-vertical",
	});
}

export default Component;
