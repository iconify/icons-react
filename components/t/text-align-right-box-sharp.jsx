import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbnbkpb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbnbkpb1c"/>`,
		"fallback": "pixelarticons:text-align-right-box-sharp",
	});
}

export default Component;
