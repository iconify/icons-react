import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymdz2acqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymdz2acqz"/>`,
		"fallback": "flowbite:ticket-solid",
	});
}

export default Component;
