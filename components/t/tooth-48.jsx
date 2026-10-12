import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd2d9rhru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd2d9rhru"/>`,
		"fallback": "energy-icons:tooth-48",
	});
}

export default Component;
