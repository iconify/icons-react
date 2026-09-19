import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xww_pnbli.css';
import '../../css/u/ug49ncc0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xww_pnbli"/><path class="ug49ncc0n"/></g>`,
		"fallback": "hugeicons:sketch",
	});
}

export default Component;
