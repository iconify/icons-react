import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gvgfizscx.css';
import '../../css/p/p-0qo7b4o.css';
import '../../css/r/r--ptkbyw.css';
import '../../css/a/ac003sy1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gvgfizscx"/><path class="p-0qo7b4o"/><path class="r--ptkbyw"/><path class="ac003sy1s"/></g>`,
		"fallback": "hugeicons:monitor-off",
	});
}

export default Component;
