import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q-88mvxik.css';
import '../../css/v/vjocsrbku.css';
import '../../css/f/fdap0sbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q-88mvxik"/><path class="vjocsrbku"/><path class="fdap0sbww"/></g>`,
		"fallback": "hugeicons:vertical-resize",
	});
}

export default Component;
