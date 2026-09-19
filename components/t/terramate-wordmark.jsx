import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8ebn724t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8ebn724t"/>`,
		"fallback": "devicon:terramate-wordmark",
	});
}

export default Component;
