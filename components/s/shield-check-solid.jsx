import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnv6n6bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fnv6n6bam"/>`,
		"fallback": "flowbite:shield-check-solid",
	});
}

export default Component;
