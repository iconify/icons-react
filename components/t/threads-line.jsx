import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz0c64buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz0c64buj"/>`,
		"fallback": "mingcute:threads-line",
	});
}

export default Component;
