import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nwfbcgisj.css';
import '../../css/z/z4dv32bje.css';
import '../../css/q/ql86wbc_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nwfbcgisj"/><path class="z4dv32bje"/><path class="ql86wbc_c"/></g>`,
		"fallback": "hugeicons:mentor",
	});
}

export default Component;
