import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w-b568bty.css';
import '../../css/m/mw-8r82fo.css';
import '../../css/a/abgj0wbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w-b568bty"/><path class="mw-8r82fo"/><path class="abgj0wbue"/></g>`,
		"fallback": "hugeicons:server-crash",
	});
}

export default Component;
