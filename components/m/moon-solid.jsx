import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmy114bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zmy114bcn"/>`,
		"fallback": "flowbite:moon-solid",
	});
}

export default Component;
