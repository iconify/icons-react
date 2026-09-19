import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slabq5brn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="slabq5brn"/>`,
		"fallback": "healthicons:medicine-mortar-outline",
	});
}

export default Component;
