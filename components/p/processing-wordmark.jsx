import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie-9fcbkd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie-9fcbkd"/>`,
		"fallback": "devicon-plain:processing-wordmark",
	});
}

export default Component;
