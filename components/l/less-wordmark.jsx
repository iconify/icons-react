import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyfgbwb8t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kyfgbwb8t"/>`,
		"fallback": "devicon-plain:less-wordmark",
	});
}

export default Component;
