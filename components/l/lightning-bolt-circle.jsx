import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgrmk_b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgrmk_b8j"/>`,
		"fallback": "mdi:lightning-bolt-circle",
	});
}

export default Component;
