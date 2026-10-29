import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty1ybmbbs.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty1ybmbbs"/>`,
		"fallback": "devicon-plain:juce-wordmark",
	});
}

export default Component;
