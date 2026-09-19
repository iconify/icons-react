import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8nol0b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8nol0b7b"/>`,
		"fallback": "cbi:mqtt",
	});
}

export default Component;
