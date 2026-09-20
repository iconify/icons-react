import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gc5sxnbxh.css';
import '../../css/d/dr6f5yw6o.css';
import '../../css/f/fqvcaxw9b.css';
import '../../css/y/yxw0pjecr.css';
import '../../css/w/wjjz3l2or.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gc5sxnbxh"/><path class="dr6f5yw6o"/><path class="fqvcaxw9b"/><path class="yxw0pjecr"/><path class="wjjz3l2or"/></g>`,
		"fallback": "streamline-color:lift",
	});
}

export default Component;
