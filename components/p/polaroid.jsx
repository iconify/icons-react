import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pljo4acqz.css';
import '../../css/e/e2xb-7bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pljo4acqz"/><path class="e2xb-7bpg"/></g>`,
		"fallback": "streamline-sharp:polaroid",
	});
}

export default Component;
