import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g-wn840fw.css';
import '../../css/a/aew_18b1v.css';
import '../../css/p/pk8yrhbxx.css';
import '../../css/i/ikivgjezg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g-wn840fw"/><circle class="aew_18b1v"/><circle class="pk8yrhbxx"/><path class="ikivgjezg"/></g>`,
		"fallback": "hugeicons:trolley-02",
	});
}

export default Component;
