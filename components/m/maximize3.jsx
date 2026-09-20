import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/piisj4nte.css';
import '../../css/h/h0k2cwlqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="piisj4nte"/><path class="h0k2cwlqk"/></g>`,
		"fallback": "reicon:maximize3",
	});
}

export default Component;
