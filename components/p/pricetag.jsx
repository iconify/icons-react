import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q73z4pb3d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q73z4pb3d"/>`,
		"fallback": "famicons:pricetag",
	});
}

export default Component;
