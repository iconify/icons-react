import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d1y6tob6i.css';
import '../../css/i/ik-qt204h.css';
import '../../css/x/xtsc8cbvl.css';
import '../../css/w/wuoav4m-a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d1y6tob6i"/><path class="ik-qt204h"/><path class="xtsc8cbvl"/><path class="wuoav4m-a"/></g>`,
		"fallback": "streamline-flex-color:show-layer",
	});
}

export default Component;
