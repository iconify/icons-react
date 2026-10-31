import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7cz4mnsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7cz4mnsi"/>`,
		"fallback": "coolicons:scan-face-round",
	});
}

export default Component;
