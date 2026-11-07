import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwit5_4bm.css';
import '../../css/z/z75ed3b-u.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/jdz4f3gnm.css';
import '../../css/z/zul9ixm_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwit5_4bm"/><path class="z75ed3b-u"/><g class="xtpeb-edw"><path class="jdz4f3gnm"/><path class="zul9ixm_v"/></g>`,
		"fallback": "solar:paint-roller-bold-duotone",
	});
}

export default Component;
