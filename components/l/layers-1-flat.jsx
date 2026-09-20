import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t7vokk1ud.css';
import '../../css/j/jkq7pc-vy.css';
import '../../css/a/aqoze1bhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t7vokk1ud"/><path class="jkq7pc-vy"/><path class="aqoze1bhp"/></g>`,
		"fallback": "streamline-sharp-color:layers-1-flat",
	});
}

export default Component;
