import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvjhj9bjg.css';
import '../../css/j/jpru1cc9e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvjhj9bjg"/><path class="jpru1cc9e"/>`,
		"fallback": "devicon:rockylinux-wordmark",
	});
}

export default Component;
