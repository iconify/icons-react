import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onstzu81w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onstzu81w"/>`,
		"fallback": "coolicons:sparkle-bulk-round",
	});
}

export default Component;
