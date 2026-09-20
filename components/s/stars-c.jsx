import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyzetcb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyzetcb9i"/>`,
		"fallback": "mage:stars-c",
	});
}

export default Component;
