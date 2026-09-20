import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1uxf8r0g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1uxf8r0g"/>`,
		"fallback": "pinhead:speech-bubble",
	});
}

export default Component;
