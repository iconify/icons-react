import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9pgq_bag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9pgq_bag"/>`,
		"fallback": "griddy-icons:store-filled",
	});
}

export default Component;
