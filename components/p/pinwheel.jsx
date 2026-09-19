import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr_fy53ar.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr_fy53ar"/>`,
		"fallback": "icon-park-solid:pinwheel",
	});
}

export default Component;
