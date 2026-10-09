import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keo7l-5me.css';
import '../../css/a/ad8--_xso.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keo7l-5me"/><path class="ad8--_xso"/>`,
		"fallback": "energy-icons:map-pin-off-48-bold",
	});
}

export default Component;
