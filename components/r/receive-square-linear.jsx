import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/prbf6mb6m.css';
import '../../css/r/r2io3rb_t.css';
import '../../css/x/xvjk-cbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="prbf6mb6m"/><path class="r2io3rb_t"/><path class="xvjk-cbox"/></g>`,
		"fallback": "solar:receive-square-linear",
	});
}

export default Component;
