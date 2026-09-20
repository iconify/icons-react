import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1c8i9qfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1c8i9qfh"/>`,
		"fallback": "streamline-ultimate:spiral-shape",
	});
}

export default Component;
