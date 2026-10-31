import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hssgmbcyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hssgmbcyf"/>`,
		"fallback": "coolicons:paperclip-horizontal-duotone-round",
	});
}

export default Component;
