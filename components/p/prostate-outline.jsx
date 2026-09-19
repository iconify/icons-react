import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-uj91b0u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p-uj91b0u"/>`,
		"fallback": "healthicons:prostate-outline",
	});
}

export default Component;
