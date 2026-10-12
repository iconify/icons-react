import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i3srbpbkt.css';
import '../../css/f/fgw7om73g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i3srbpbkt"/><path class="fgw7om73g"/></g>`,
		"fallback": "andrsrxn:reply",
	});
}

export default Component;
