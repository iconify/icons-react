import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvb3-tboc.css';
import '../../css/p/p2iw4076h.css';
import '../../css/u/ufu0pi29p.css';
import '../../css/c/cu6gj4bai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mvb3-tboc"/><path class="p2iw4076h"/><path class="ufu0pi29p"/><path class="cu6gj4bai"/></g>`,
		"fallback": "tdesign:personal-information",
	});
}

export default Component;
