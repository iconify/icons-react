import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/modu3zppg.css';
import '../../css/i/i-3hvmfaa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="modu3zppg"/><path class="i-3hvmfaa"/>`,
		"fallback": "energy-icons:move-horizontal-48",
	});
}

export default Component;
