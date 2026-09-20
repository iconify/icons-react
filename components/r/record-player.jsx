import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ymsmzlb1y.css';
import '../../css/e/ecu98ubys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ymsmzlb1y"/><path class="ecu98ubys"/></g>`,
		"fallback": "streamline-sharp:record-player",
	});
}

export default Component;
