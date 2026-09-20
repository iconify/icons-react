import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzi_0qbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzi_0qbmf"/>`,
		"fallback": "mdi:number-four-circle-outline",
	});
}

export default Component;
