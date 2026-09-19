import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr0d2hbau.css';
import '../../css/m/myu93rbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr0d2hbau"/><path class="myu93rbrt"/>`,
		"fallback": "boxicons:prawn-filled",
	});
}

export default Component;
