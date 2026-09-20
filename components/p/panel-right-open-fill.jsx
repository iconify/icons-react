import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2nio-cvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2nio-cvc"/>`,
		"fallback": "keyline-icons:panel-right-open-fill",
	});
}

export default Component;
