import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsruq6fcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsruq6fcy"/>`,
		"fallback": "pixelarticons:radio-tower",
	});
}

export default Component;
