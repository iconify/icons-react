import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3g_hqbet.css';
import '../../css/m/mhuifpbqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3g_hqbet"/><path class="mhuifpbqc"/>`,
		"fallback": "energy-icons:solar-lantern-48-bold",
	});
}

export default Component;
