import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4frg809p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q4frg809p"/>`,
		"fallback": "streamline-plump:iris-scan-solid",
	});
}

export default Component;
