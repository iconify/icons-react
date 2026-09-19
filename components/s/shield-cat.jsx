import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl-8y1hvp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl-8y1hvp"/>`,
		"fallback": "fa6-solid:shield-cat",
	});
}

export default Component;
