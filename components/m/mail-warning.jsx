import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kmdvi70wk.css';
import '../../css/w/ws3llgtst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kmdvi70wk"/><path class="ws3llgtst"/></g>`,
		"fallback": "hugeicons:mail-warning",
	});
}

export default Component;
