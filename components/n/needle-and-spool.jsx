import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hofbyd45q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hofbyd45q"/>`,
		"fallback": "temaki:needle-and-spool",
	});
}

export default Component;
