import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkis0cc-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkis0cc-b"/>`,
		"fallback": "cbi:roomsguestroom",
	});
}

export default Component;
