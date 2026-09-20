import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqe5zm-hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqe5zm-hn"/>`,
		"fallback": "ri:vip-crown-fill",
	});
}

export default Component;
