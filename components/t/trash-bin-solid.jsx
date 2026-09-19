import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7p7qz3cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z7p7qz3cw"/>`,
		"fallback": "flowbite:trash-bin-solid",
	});
}

export default Component;
