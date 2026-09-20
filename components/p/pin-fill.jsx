import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se8ownbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="se8ownbaz"/>`,
		"fallback": "mingcute:pin-fill",
	});
}

export default Component;
