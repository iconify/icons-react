import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzxff1zbd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzxff1zbd"/>`,
		"fallback": "fa6-brands:sellcast",
	});
}

export default Component;
