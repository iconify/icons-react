import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2ke1ngbh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r2ke1ngbh"/>`,
		"fallback": "healthicons:ui-menu-outline",
	});
}

export default Component;
