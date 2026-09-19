import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qia2bntri.css';
import '../../css/i/izs9_e8rp.css';
import '../../css/e/eyx_5_biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qia2bntri"/><path class="izs9_e8rp"/><path class="eyx_5_biz"/></g>`,
		"fallback": "hugeicons:play-list-favourite-02",
	});
}

export default Component;
