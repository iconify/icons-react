import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmtdotb0s.css';
import '../../css/l/lsyzzy5ql.css';
import '../../css/l/l3a7hfkmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mmtdotb0s"/><circle class="lsyzzy5ql"/><path class="l3a7hfkmc"/></g>`,
		"fallback": "tdesign:logo-chrome",
	});
}

export default Component;
