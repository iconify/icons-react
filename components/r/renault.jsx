import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqid-obeh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqid-obeh"/>`,
		"fallback": "icon-park-outline:renault",
	});
}

export default Component;
