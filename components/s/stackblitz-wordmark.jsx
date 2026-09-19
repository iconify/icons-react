import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysufu1sye.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysufu1sye"/>`,
		"fallback": "devicon-plain:stackblitz-wordmark",
	});
}

export default Component;
