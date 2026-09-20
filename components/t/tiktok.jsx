import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxy7_2bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxy7_2bfv"/>`,
		"fallback": "proicons:tiktok",
	});
}

export default Component;
