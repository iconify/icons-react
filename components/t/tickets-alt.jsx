import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osxrajb_q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osxrajb_q"/>`,
		"fallback": "dashicons:tickets-alt",
	});
}

export default Component;
