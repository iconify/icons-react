import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyeo0eqpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oyeo0eqpb"/>`,
		"fallback": "flowbite:papper-plane-solid",
	});
}

export default Component;
