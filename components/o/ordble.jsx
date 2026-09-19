import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbko1l4zg.css';

const viewBox = {"width":710,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbko1l4zg"/>`,
		"fallback": "ls:ordble",
	});
}

export default Component;
