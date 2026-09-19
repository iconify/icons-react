import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhpin-0sd.css';
import '../../css/y/y9o-uoblu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhpin-0sd"/><path class="y9o-uoblu"/>`,
		"fallback": "ion:ios-woman",
	});
}

export default Component;
