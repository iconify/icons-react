import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh1w3bcxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh1w3bcxl"/>`,
		"fallback": "coolicons:telescope-fill-round",
	});
}

export default Component;
