import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x213hpcka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x213hpcka"/>`,
		"fallback": "fa-brands:shopware",
	});
}

export default Component;
