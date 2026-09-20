import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptr56cnqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptr56cnqe"/>`,
		"fallback": "mdi:soundcloud",
	});
}

export default Component;
