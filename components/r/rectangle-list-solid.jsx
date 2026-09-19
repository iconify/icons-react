import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqq8yzb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fqq8yzb_f"/>`,
		"fallback": "flowbite:rectangle-list-solid",
	});
}

export default Component;
