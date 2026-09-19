import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w456yoqax.css';
import '../../css/d/d_jwqly5w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w456yoqax"/><path class="d_jwqly5w"/>`,
		"fallback": "devicon:phoenix-wordmark",
	});
}

export default Component;
