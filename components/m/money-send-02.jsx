import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pgjt86b_x.css';
import '../../css/u/ukm46zb4e.css';
import '../../css/s/sw0c0ebjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pgjt86b_x"/><path class="ukm46zb4e"/><path class="sw0c0ebjj"/></g>`,
		"fallback": "hugeicons:money-send-02",
	});
}

export default Component;
