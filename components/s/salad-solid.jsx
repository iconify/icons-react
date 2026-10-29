import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hmywlssyq.css';
import '../../css/e/ei6vnpjwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hmywlssyq"/><path class="ei6vnpjwt wm-a"/></g>`,
		"fallback": "withicons:salad-solid",
	});
}

export default Component;
