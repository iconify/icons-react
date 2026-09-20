import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv9y7lbds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv9y7lbds"/>`,
		"fallback": "streamline-plump:layout-window-4",
	});
}

export default Component;
