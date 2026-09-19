import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhb8c01ug.css';
import '../../css/k/ki6om5blk.css';
import '../../css/w/w3blszelr.css';
import '../../css/g/g97xns1ip.css';
import '../../css/y/yyx32dxar.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hhb8c01ug"><path class="ki6om5blk"/><path class="w3blszelr"/><path class="g97xns1ip"/><path class="yyx32dxar"/></g>`,
		"fallback": "catppuccin:laravel",
	});
}

export default Component;
