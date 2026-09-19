import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut-71fb_j.css';
import '../../css/n/nlgbk_b2q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut-71fb_j"/><path class="nlgbk_b2q"/>`,
		"fallback": "devicon:k3os-wordmark",
	});
}

export default Component;
