import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o9z1up3bw.css';
import '../../css/m/m88ceybjj.css';
import '../../css/c/cg9kg7iup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o9z1up3bw"/><path class="m88ceybjj"/><path class="cg9kg7iup"/></g>`,
		"fallback": "hugeicons:setting-done-02",
	});
}

export default Component;
