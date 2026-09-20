import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf04q1bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf04q1bge"/>`,
		"fallback": "mage:male",
	});
}

export default Component;
