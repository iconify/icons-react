import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/utq259i-v.css';
import '../../css/p/p8idbw18h.css';
import '../../css/d/d7lbhzbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="utq259i-v"/><path class="p8idbw18h"/><path class="d7lbhzbrk"/></g>`,
		"fallback": "streamline-cyber:thermometer-high",
	});
}

export default Component;
