import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1k2tmaip.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1k2tmaip"/>`,
		"fallback": "devicon:vercel-wordmark",
	});
}

export default Component;
