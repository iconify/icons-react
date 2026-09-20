import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qjofajyji.css';
import '../../css/s/sfr6_gbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qjofajyji"/><path class="sfr6_gbxz"/></g>`,
		"fallback": "streamline-sharp:school-bus-side",
	});
}

export default Component;
