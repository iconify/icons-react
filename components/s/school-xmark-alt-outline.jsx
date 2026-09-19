import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2g3rbt8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2g3rbt8a"/>`,
		"fallback": "flowbite:school-xmark-alt-outline",
	});
}

export default Component;
