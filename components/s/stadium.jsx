import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2-jwxbjs.css';

const viewBox = {"width":704,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2-jwxbjs"/>`,
		"fallback": "whh:stadium",
	});
}

export default Component;
