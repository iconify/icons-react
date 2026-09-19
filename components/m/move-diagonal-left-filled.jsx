import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyiug0d1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyiug0d1t"/>`,
		"fallback": "boxicons:move-diagonal-left-filled",
	});
}

export default Component;
