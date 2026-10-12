import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5nnmsbvd.css';
import '../../css/f/f3hc-8p1x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5nnmsbvd"/><path class="f3hc-8p1x"/>`,
		"fallback": "garden:stamp-stroke-20",
	});
}

export default Component;
