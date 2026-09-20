import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlp_js4cf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlp_js4cf"/>`,
		"fallback": "selfhst:pequeroku-dark",
	});
}

export default Component;
