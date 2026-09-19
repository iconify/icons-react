import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1yw4pb9d.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1yw4pb9d"/>`,
		"fallback": "fa6-brands:stack-exchange",
	});
}

export default Component;
