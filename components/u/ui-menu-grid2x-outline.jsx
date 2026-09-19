import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nukmbjz2o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nukmbjz2o"/>`,
		"fallback": "healthicons:ui-menu-grid2x-outline",
	});
}

export default Component;
