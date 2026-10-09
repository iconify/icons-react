import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv2p86eoi.css';
import '../../css/q/qfryzomdr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv2p86eoi"/><path class="qfryzomdr"/>`,
		"fallback": "energy-icons:solar-shading-48",
	});
}

export default Component;
