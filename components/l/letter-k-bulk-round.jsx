import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwo7y5b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwo7y5b1s"/>`,
		"fallback": "coolicons:letter-k-bulk-round",
	});
}

export default Component;
