import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vv6_lghob.css';
import '../../css/z/zqgfkv9mp.css';
import '../../css/g/g5_dv9bao.css';
import '../../css/p/pfpm8ezql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vv6_lghob wm-shadow"/><path class="wm-shadow zqgfkv9mp"/><path class="g5_dv9bao"/><path class="pfpm8ezql"/></g>`,
		"fallback": "withicons-brutal:router",
	});
}

export default Component;
