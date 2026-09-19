import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj6-crbcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj6-crbcn"/>`,
		"fallback": "icon-park-outline:torch",
	});
}

export default Component;
