import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjgy0_bnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjgy0_bnh"/>`,
		"fallback": "heroicons:queue-list-solid",
	});
}

export default Component;
