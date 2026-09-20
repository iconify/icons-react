import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcb9t62hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kcb9t62hz"/>`,
		"fallback": "prime:spinner-dotted",
	});
}

export default Component;
