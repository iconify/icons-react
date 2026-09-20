import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bio6w1bwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bio6w1bwd"/>`,
		"fallback": "lineicons:shopify",
	});
}

export default Component;
