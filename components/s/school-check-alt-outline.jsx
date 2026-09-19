import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta53jqbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta53jqbrv"/>`,
		"fallback": "flowbite:school-check-alt-outline",
	});
}

export default Component;
