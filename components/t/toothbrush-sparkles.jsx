import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ast60gb2w.css';
import '../../css/c/cfny-zd9d.css';
import '../../css/f/fbckud-nr.css';
import '../../css/x/xik3__9tl.css';
import '../../css/v/vi-a4sbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ast60gb2w"/><path class="cfny-zd9d"/><rect transform="rotate(45 6.04 29.81)scale(-1 1)" class="fbckud-nr"/><path class="xik3__9tl"/><path class="vi-a4sbqw"/></g>`,
		"fallback": "andrsrxn:toothbrush-sparkles",
	});
}

export default Component;
