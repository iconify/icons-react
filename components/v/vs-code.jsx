import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izo3etbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izo3etbby"/>`,
		"fallback": "lineicons:vs-code",
	});
}

export default Component;
