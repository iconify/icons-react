import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p1yhvzbay.css';
import '../../css/x/xljnl52qq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p1yhvzbay"/><path class="xljnl52qq"/></g>`,
		"fallback": "hugeicons:select-02",
	});
}

export default Component;
