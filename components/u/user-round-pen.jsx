import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gr1vjs2zu.css';
import '../../css/x/xvfgdwb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gr1vjs2zu"/><path class="xvfgdwb2b"/></g>`,
		"fallback": "hugeicons:user-round-pen",
	});
}

export default Component;
