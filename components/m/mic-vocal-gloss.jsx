import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv2qxwlwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv2qxwlwh"/>`,
		"fallback": "withicons:mic-vocal-gloss",
	});
}

export default Component;
