import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/ljakav41z.css';
import '../../css/g/gplkv5ukx.css';
import '../../css/y/yf-u9nb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ljakav41z"/><path class="gplkv5ukx"/><path class="yf-u9nb-l"/></g>`,
		"fallback": "hugeicons:spaceship",
	});
}

export default Component;
