import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f42v76bcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f42v76bcy"/>`,
		"fallback": "pixelarticons:unlock-sharp",
	});
}

export default Component;
