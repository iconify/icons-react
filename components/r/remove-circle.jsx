import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npdp7k8ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npdp7k8ew"/>`,
		"fallback": "hugeicons:remove-circle",
	});
}

export default Component;
