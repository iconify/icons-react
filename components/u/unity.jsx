import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2f7wub-d.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2f7wub-d"/>`,
		"fallback": "fa-brands:unity",
	});
}

export default Component;
