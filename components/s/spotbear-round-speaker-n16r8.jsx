import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okzh9cbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okzh9cbiy"/>`,
		"fallback": "cbi:spotbear-round-speaker-n16r8",
	});
}

export default Component;
