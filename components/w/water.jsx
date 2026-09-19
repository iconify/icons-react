import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nervjlbse.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nervjlbse"/>`,
		"fallback": "icon-park-outline:water",
	});
}

export default Component;
