import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st1-uurhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="st1-uurhq"/>`,
		"fallback": "solar:square-arrow-up-bold",
	});
}

export default Component;
