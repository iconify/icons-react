import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hqk3egkyy.css';
import '../../css/s/sy6vzlr6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hqk3egkyy"/><path class="sy6vzlr6i"/></g>`,
		"fallback": "hugeicons:keyframe-align-horizontal",
	});
}

export default Component;
