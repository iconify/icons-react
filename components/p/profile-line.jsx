import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmke3m5bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmke3m5bt"/>`,
		"fallback": "mingcute:profile-line",
	});
}

export default Component;
