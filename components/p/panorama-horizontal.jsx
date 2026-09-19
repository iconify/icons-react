import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4i273b2b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4i273b2b"/>`,
		"fallback": "icon-park-solid:panorama-horizontal",
	});
}

export default Component;
