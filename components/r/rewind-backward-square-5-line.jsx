import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0zqmdbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0zqmdbih"/>`,
		"fallback": "mingcute:rewind-backward-square-5-line",
	});
}

export default Component;
