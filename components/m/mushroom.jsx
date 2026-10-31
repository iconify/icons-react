import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yrzt4abnx.css';
import '../../css/q/q6yyvnb5n.css';
import '../../css/w/wkw49hs5o.css';
import '../../css/v/vhrpu8b0l.css';
import '../../css/v/v7_69tbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yrzt4abnx"/><path class="q6yyvnb5n wm-shadow"/><path class="wkw49hs5o"/><path class="vhrpu8b0l"/><path class="v7_69tbzo"/></g>`,
		"fallback": "withicons-brutal:mushroom",
	});
}

export default Component;
