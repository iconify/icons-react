import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rep0ab8vm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rep0ab8vm"/>`,
		"fallback": "mdi:mouse-outline",
	});
}

export default Component;
