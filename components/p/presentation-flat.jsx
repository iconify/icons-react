import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tyzh6ybgb.css';
import '../../css/q/qhadlbb6x.css';
import '../../css/u/utv-fzbtz.css';
import '../../css/a/al580-bkx.css';
import '../../css/s/sk62d4bym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tyzh6ybgb"/><path class="qhadlbb6x"/><path class="utv-fzbtz"/><path clip-rule="evenodd" class="al580-bkx"/><path class="sk62d4bym"/></g>`,
		"fallback": "streamline-plump-color:presentation-flat",
	});
}

export default Component;
