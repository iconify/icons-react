import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmlnesg3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmlnesg3w"/>`,
		"fallback": "coolicons:mail-round",
	});
}

export default Component;
