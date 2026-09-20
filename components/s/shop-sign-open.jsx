import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd9d18bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd9d18bqi"/>`,
		"fallback": "streamline-ultimate:shop-sign-open",
	});
}

export default Component;
