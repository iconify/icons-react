import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eukozub-p.css';
import '../../css/t/tnbv3bc-m.css';
import '../../css/j/j1g38rb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eukozub-p"/><path class="tnbv3bc-m"/><path class="j1g38rb7j"/></g>`,
		"fallback": "hugeicons:lock-key",
	});
}

export default Component;
