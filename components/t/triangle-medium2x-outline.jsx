import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up0ti3bhu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="up0ti3bhu"/>`,
		"fallback": "healthicons:triangle-medium2x-outline",
	});
}

export default Component;
