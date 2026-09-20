import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsb22-d5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsb22-d5r"/>`,
		"fallback": "pixelarticons:more-horizontal-sharp",
	});
}

export default Component;
