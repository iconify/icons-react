import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj2ms3n-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rj2ms3n-i"/>`,
		"fallback": "streamline-freehand:phone-actions-merge",
	});
}

export default Component;
