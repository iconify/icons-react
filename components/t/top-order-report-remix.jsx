import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxcjuh4_v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qxcjuh4_v"/>`,
		"fallback": "streamline-plump:top-order-report-remix",
	});
}

export default Component;
