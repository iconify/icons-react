import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvh346bsa.css';
import '../../css/k/kqy72r22k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvh346bsa"/><path class="kqy72r22k"/>`,
		"fallback": "energy-icons:undo-48",
	});
}

export default Component;
