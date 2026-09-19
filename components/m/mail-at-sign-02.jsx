import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ao6q-ib-y.css';
import '../../css/m/mn0dgob1e.css';
import '../../css/w/w9i_d0x_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ao6q-ib-y"/><path class="mn0dgob1e"/><path class="w9i_d0x_a"/></g>`,
		"fallback": "hugeicons:mail-at-sign-02",
	});
}

export default Component;
