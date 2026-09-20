import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp3-8kfrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp3-8kfrw"/>`,
		"fallback": "majesticons:iphone-x-apps",
	});
}

export default Component;
