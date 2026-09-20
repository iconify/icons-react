import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyuep_bqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyuep_bqx"/>`,
		"fallback": "majesticons:strike-through",
	});
}

export default Component;
