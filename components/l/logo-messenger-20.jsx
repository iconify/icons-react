import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5ehvrl0n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5ehvrl0n"/>`,
		"fallback": "garden:logo-messenger-20",
	});
}

export default Component;
