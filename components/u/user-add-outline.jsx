import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfs6ffbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfs6ffbnl"/>`,
		"fallback": "flowbite:user-add-outline",
	});
}

export default Component;
