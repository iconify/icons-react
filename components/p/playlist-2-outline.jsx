import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5197zbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t5197zbyh"/>`,
		"fallback": "solar:playlist-2-outline",
	});
}

export default Component;
