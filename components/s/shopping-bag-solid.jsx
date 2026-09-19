import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vly36pbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vly36pbdv"/>`,
		"fallback": "flowbite:shopping-bag-solid",
	});
}

export default Component;
