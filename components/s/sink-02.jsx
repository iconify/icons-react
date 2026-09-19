import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xele4rbdw.css';
import '../../css/y/yol0thogl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xele4rbdw"/><path class="yol0thogl"/></g>`,
		"fallback": "hugeicons:sink-02",
	});
}

export default Component;
