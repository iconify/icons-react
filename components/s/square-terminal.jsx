import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/h/hgl6-d36q.css';
import '../../css/a/au8lj06yo.css';
import '../../css/l/l833663_k.css';
import '../../css/p/pf1-z5xoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="hgl6-d36q"/><path class="au8lj06yo"/><path class="l833663_k wm-shine"/><path class="pf1-z5xoz wm-deco"/></g>`,
		"fallback": "withicons-sticker:square-terminal",
	});
}

export default Component;
