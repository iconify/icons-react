import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0l9u9b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0l9u9b9b"/>`,
		"fallback": "keyline-icons:map-pin-x-sharp",
	});
}

export default Component;
