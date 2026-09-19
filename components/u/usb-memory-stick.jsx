import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/a/ae5sagb5q.css';
import '../../css/v/v8d1evmim.css';
import '../../css/y/y2dloj_2w.css';
import '../../css/o/oqku4vbfb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="ae5sagb5q"/><path class="v8d1evmim"/><path class="y2dloj_2w"/><path class="oqku4vbfb"/></g>`,
		"fallback": "icon-park:usb-memory-stick",
	});
}

export default Component;
