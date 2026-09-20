import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kv8gt_bsu.css';
import '../../css/g/grgvu4bsu.css';
import '../../css/y/yy83lwb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kv8gt_bsu"/><path clip-rule="evenodd" class="grgvu4bsu"/><path class="yy83lwb2g"/></g>`,
		"fallback": "reicon:music-slider-filled",
	});
}

export default Component;
