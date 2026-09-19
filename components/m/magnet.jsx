import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4waorgjg.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4waorgjg"/>`,
		"fallback": "fa6-solid:magnet",
	});
}

export default Component;
