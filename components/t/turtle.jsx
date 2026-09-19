import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqo3t7f7v.css';
import '../../css/u/uww4np3_w.css';
import '../../css/z/zs4vfybts.css';
import '../../css/z/z7lg6abss.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wqo3t7f7v"/><path class="uww4np3_w"/><path class="zs4vfybts"/><path class="z7lg6abss"/></g>`,
		"fallback": "fluent-emoji-flat:turtle",
	});
}

export default Component;
