import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-rlqsb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-rlqsb-w"/>`,
		"fallback": "keyline-icons:truck-sharp",
	});
}

export default Component;
