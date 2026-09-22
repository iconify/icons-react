import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc19m5q7r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kc19m5q7r"/>`,
		"fallback": "devicon-plain:linear-wordmark",
	});
}

export default Component;
