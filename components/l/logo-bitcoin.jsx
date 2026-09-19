import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2w2b3b3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2w2b3b3l"/>`,
		"fallback": "famicons:logo-bitcoin",
	});
}

export default Component;
