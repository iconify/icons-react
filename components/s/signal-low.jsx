import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg-i2sbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cg-i2sbad"/>`,
		"fallback": "streamline-freehand:signal-low",
	});
}

export default Component;
