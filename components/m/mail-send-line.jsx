import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhmsmb9kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhmsmb9kq"/>`,
		"fallback": "ri:mail-send-line",
	});
}

export default Component;
