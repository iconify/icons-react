import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f770scbge.css';
import '../../css/b/bgy0nnrsi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f770scbge"/><path class="bgy0nnrsi"/>`,
		"fallback": "streamline-pixel:social-rewards-like-bubble",
	});
}

export default Component;
