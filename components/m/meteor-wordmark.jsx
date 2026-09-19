import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad7p1c9ad.css';
import '../../css/e/e32x_9b-n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad7p1c9ad"/><path class="e32x_9b-n"/>`,
		"fallback": "devicon:meteor-wordmark",
	});
}

export default Component;
