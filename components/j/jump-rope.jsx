import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vp4kqio0x.css';
import '../../css/o/oc_v8ccyt.css';
import '../../css/p/p4pqdhbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vp4kqio0x"/><path class="oc_v8ccyt"/><path class="p4pqdhbxo"/></g>`,
		"fallback": "iconaut:jump-rope",
	});
}

export default Component;
