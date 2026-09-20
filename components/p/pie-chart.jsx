import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/poo1qvent.css';
import '../../css/v/vzsorcbjw.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/q/q6l61kbvl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="poo1qvent"/><path clip-rule="evenodd" class="vzsorcbjw"/><path class="xjfc-xbtr"/><path class="q6l61kbvl"/></g>`,
		"fallback": "streamline-color:pie-chart",
	});
}

export default Component;
