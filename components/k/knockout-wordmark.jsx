import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f27cr3b8l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f27cr3b8l"/>`,
		"fallback": "devicon-plain:knockout-wordmark",
	});
}

export default Component;
