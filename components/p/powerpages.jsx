import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqopl_b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqopl_b2n"/>`,
		"fallback": "simple-icons:powerpages",
	});
}

export default Component;
