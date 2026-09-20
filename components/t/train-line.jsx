import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf49yac9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf49yac9f"/>`,
		"fallback": "si:train-line",
	});
}

export default Component;
