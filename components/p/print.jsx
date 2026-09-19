import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv3-k1ocu.css';
import '../../css/h/hxk53pb6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv3-k1ocu"/><path class="hxk53pb6b"/>`,
		"fallback": "cil:print",
	});
}

export default Component;
