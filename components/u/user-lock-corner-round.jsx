import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvx9cwb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvx9cwb2h"/>`,
		"fallback": "coolicons:user-lock-corner-round",
	});
}

export default Component;
