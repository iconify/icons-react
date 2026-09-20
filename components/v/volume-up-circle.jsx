import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p15a8f19n.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p15a8f19n"/>`,
		"fallback": "jam:volume-up-circle",
	});
}

export default Component;
