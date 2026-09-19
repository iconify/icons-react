import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q9rms6bgf.css';
import '../../css/i/ipkgsbcsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q9rms6bgf"/><path class="ipkgsbcsq"/></g>`,
		"fallback": "hugeicons:sun-cloud-01",
	});
}

export default Component;
