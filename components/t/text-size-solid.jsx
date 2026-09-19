import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmf13t2li.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tmf13t2li"/>`,
		"fallback": "flowbite:text-size-solid",
	});
}

export default Component;
