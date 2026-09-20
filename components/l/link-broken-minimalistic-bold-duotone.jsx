import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id6do0buy.css';
import '../../css/f/fqjrqvk9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id6do0buy"/><path class="fqjrqvk9y"/>`,
		"fallback": "solar:link-broken-minimalistic-bold-duotone",
	});
}

export default Component;
