import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q926-gbel.css';
import '../../css/s/s_bdsyxad.css';
import '../../css/i/iqbnmdmbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q926-gbel"/><path class="s_bdsyxad"/><path class="iqbnmdmbt"/></g>`,
		"fallback": "hugeicons:panda",
	});
}

export default Component;
