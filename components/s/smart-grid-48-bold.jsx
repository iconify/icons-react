import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6nfsjb9y.css';
import '../../css/q/qotc-vbam.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6nfsjb9y"/><path class="qotc-vbam"/>`,
		"fallback": "energy-icons:smart-grid-48-bold",
	});
}

export default Component;
