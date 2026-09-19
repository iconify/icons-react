import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv4wt1bhc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="kv4wt1bhc"/>`,
		"fallback": "famicons:tablet-portrait-outline",
	});
}

export default Component;
