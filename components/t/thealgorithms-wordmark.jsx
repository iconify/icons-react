import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjaj40bro.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjaj40bro"/>`,
		"fallback": "devicon-plain:thealgorithms-wordmark",
	});
}

export default Component;
