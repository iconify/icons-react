import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dfga-3bcl.css';
import '../../css/u/u8nl70_wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dfga-3bcl"/><path class="u8nl70_wg"/></g>`,
		"fallback": "streamline-sharp:safari",
	});
}

export default Component;
