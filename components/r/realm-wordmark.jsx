import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7hkk8ylo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7hkk8ylo"/>`,
		"fallback": "devicon-plain:realm-wordmark",
	});
}

export default Component;
