import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5a7kgjlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5a7kgjlf"/>`,
		"fallback": "mingcute:photo-album-fill",
	});
}

export default Component;
