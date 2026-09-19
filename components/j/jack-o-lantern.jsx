import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvcpwabzp.css';
import '../../css/e/efv81yb8v.css';
import '../../css/q/qxzz2d8fg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvcpwabzp"/><path class="efv81yb8v"/><path class="qxzz2d8fg"/></g>`,
		"fallback": "fluent-emoji-flat:jack-o-lantern",
	});
}

export default Component;
