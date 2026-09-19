import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3jh0x0el.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3jh0x0el"/>`,
		"fallback": "fa6-brands:square-font-awesome",
	});
}

export default Component;
