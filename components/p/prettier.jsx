import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yiv0fjb-a.css';
import '../../css/z/zipz652ap.css';
import '../../css/l/lf2zr440w.css';
import '../../css/o/ox2xrtbxs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="yiv0fjb-a"/><path class="zipz652ap"/><path class="lf2zr440w"/><path class="ox2xrtbxs"/></g>`,
		"fallback": "catppuccin:prettier",
	});
}

export default Component;
