import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7z33-zvs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7z33-zvs"/>`,
		"fallback": "pinhead:pickup-truck-with-slidein-camper",
	});
}

export default Component;
