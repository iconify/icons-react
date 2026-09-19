import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0p-a1baf.css';
import '../../css/u/uu8vm-ber.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0p-a1baf"/><path class="uu8vm-ber"/>`,
		"fallback": "flat-color-icons:light-at-the-end-of-tunnel",
	});
}

export default Component;
