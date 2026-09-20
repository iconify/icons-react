import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3tkxm7_k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3tkxm7_k"/>`,
		"fallback": "temaki:surfing",
	});
}

export default Component;
