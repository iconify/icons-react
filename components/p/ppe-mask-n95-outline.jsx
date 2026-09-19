import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cszwis2hu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cszwis2hu"/>`,
		"fallback": "healthicons:ppe-mask-n95-outline",
	});
}

export default Component;
