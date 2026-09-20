import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z2lxv6b1e.css';
import '../../css/g/g92jt5b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z2lxv6b1e"/><path class="g92jt5b6b"/></g>`,
		"fallback": "reicon:lock2",
	});
}

export default Component;
