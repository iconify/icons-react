import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8g66mkzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8g66mkzk"/>`,
		"fallback": "coolicons:lock-round",
	});
}

export default Component;
