import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzbcp5bsh.css';
import '../../css/l/lu7edcbnm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzbcp5bsh"/><path class="lu7edcbnm"/>`,
		"fallback": "energy-icons:text-color-48-bold",
	});
}

export default Component;
