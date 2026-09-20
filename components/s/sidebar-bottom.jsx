import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nctiv92jx.css';
import '../../css/c/cq0b-er8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nctiv92jx"/><path class="cq0b-er8b"/></g>`,
		"fallback": "reicon:sidebar-bottom",
	});
}

export default Component;
