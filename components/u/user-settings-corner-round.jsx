import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kavlb0b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kavlb0b_k"/>`,
		"fallback": "coolicons:user-settings-corner-round",
	});
}

export default Component;
