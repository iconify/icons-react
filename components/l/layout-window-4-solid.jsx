import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p47g3hbns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p47g3hbns"/>`,
		"fallback": "streamline-plump:layout-window-4-solid",
	});
}

export default Component;
