import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iq63t9bev.css';
import '../../css/g/ge-4pttkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iq63t9bev"/><path class="ge-4pttkh"/></g>`,
		"fallback": "streamline-ultimate:lock-unlock-4",
	});
}

export default Component;
