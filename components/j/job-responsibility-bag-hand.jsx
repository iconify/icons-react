import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcsvxunqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcsvxunqx"/>`,
		"fallback": "streamline-ultimate:job-responsibility-bag-hand",
	});
}

export default Component;
