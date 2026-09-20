import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbw1u09ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbw1u09ik"/>`,
		"fallback": "pixelarticons:store-sharp",
	});
}

export default Component;
