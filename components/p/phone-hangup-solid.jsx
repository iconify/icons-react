import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy02c7b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy02c7b9i"/>`,
		"fallback": "flowbite:phone-hangup-solid",
	});
}

export default Component;
