import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfq6du_me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfq6du_me"/>`,
		"fallback": "ri:mail-open-line",
	});
}

export default Component;
