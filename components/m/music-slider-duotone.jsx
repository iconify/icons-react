import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u3vs50bgi.css';
import '../../css/k/kv8gt_bsu.css';
import '../../css/i/ib4otfp4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u3vs50bgi"/><path class="kv8gt_bsu"/><path clip-rule="evenodd" class="ib4otfp4a"/></g>`,
		"fallback": "reicon:music-slider-duotone",
	});
}

export default Component;
