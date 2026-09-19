import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncc2hmb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ncc2hmb5b"/>`,
		"fallback": "flowbite:lock-open-solid",
	});
}

export default Component;
