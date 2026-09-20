import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu67n8t-k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu67n8t-k"/>`,
		"fallback": "pinhead:rx-symbol-above-outstretched-hand",
	});
}

export default Component;
