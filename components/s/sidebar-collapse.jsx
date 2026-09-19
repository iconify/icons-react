import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w2b66hb1e.css';
import '../../css/f/fs5_vbcwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w2b66hb1e"/><path class="fs5_vbcwi"/></g>`,
		"fallback": "iconoir:sidebar-collapse",
	});
}

export default Component;
