import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3a964bzv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3a964bzv"/>`,
		"fallback": "devicon:sentry-wordmark",
	});
}

export default Component;
