import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u62_66b0f.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u62_66b0f"/>`,
		"fallback": "lineicons:ruler-pen",
	});
}

export default Component;
