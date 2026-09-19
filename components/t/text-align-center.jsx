import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf80y80vm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf80y80vm"/>`,
		"fallback": "fe:text-align-center",
	});
}

export default Component;
