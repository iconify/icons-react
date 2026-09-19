import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppq8x2-2k.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppq8x2-2k"/>`,
		"fallback": "fa6-solid:rectangle-ad",
	});
}

export default Component;
