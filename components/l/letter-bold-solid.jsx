import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvu-1-bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xvu-1-bhg"/>`,
		"fallback": "flowbite:letter-bold-solid",
	});
}

export default Component;
