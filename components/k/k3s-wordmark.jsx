import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thghjjkzc.css';
import '../../css/x/x97ig8bqb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thghjjkzc"/><path class="x97ig8bqb"/>`,
		"fallback": "devicon:k3s-wordmark",
	});
}

export default Component;
