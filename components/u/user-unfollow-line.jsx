import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdn_2bb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdn_2bb2u"/>`,
		"fallback": "ri:user-unfollow-line",
	});
}

export default Component;
