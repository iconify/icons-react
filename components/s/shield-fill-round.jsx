import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf5g16b_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf5g16b_w"/>`,
		"fallback": "coolicons:shield-fill-round",
	});
}

export default Component;
