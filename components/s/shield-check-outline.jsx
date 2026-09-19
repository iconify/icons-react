import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2so5n4so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2so5n4so"/>`,
		"fallback": "flowbite:shield-check-outline",
	});
}

export default Component;
