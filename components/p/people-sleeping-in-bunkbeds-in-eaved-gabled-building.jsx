import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi-09xbts.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi-09xbts"/>`,
		"fallback": "pinhead:people-sleeping-in-bunkbeds-in-eaved-gabled-building",
	});
}

export default Component;
