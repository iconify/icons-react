import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c83n9-b_x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c83n9-b_x"/>`,
		"fallback": "icon-park-outline:move-in",
	});
}

export default Component;
