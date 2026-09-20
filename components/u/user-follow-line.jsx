import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0wyz3bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0wyz3bmk"/>`,
		"fallback": "ri:user-follow-line",
	});
}

export default Component;
