import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eel_tfbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eel_tfbwn"/>`,
		"fallback": "coolicons:target-fill-round",
	});
}

export default Component;
