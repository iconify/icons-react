import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls-cjjsgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls-cjjsgo"/>`,
		"fallback": "solar:rocket-2-linear",
	});
}

export default Component;
