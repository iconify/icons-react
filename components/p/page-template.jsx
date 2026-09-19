import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ion3i0afj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ion3i0afj"/>`,
		"fallback": "icon-park-solid:page-template",
	});
}

export default Component;
