import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiox78u5o.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiox78u5o"/>`,
		"fallback": "fa-solid:kiwi-bird",
	});
}

export default Component;
