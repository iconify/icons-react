import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cnn4d64tb.css';
import '../../css/y/ynvxb_fkj.css';
import '../../css/m/mm331ob-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cnn4d64tb"/><path class="ynvxb_fkj"/><path class="mm331ob-k"/></g>`,
		"fallback": "hugeicons:pumpkin",
	});
}

export default Component;
