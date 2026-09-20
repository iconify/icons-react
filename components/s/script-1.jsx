import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d98b-4bhw.css';
import '../../css/z/zz0w94bev.css';
import '../../css/s/s4e3h56ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d98b-4bhw"/><path class="zz0w94bev"/><path class="s4e3h56ks"/></g>`,
		"fallback": "streamline-sharp:script-1",
	});
}

export default Component;
