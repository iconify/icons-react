import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxgwi8bcr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxgwi8bcr"/>`,
		"fallback": "energy-icons:octagon-48",
	});
}

export default Component;
