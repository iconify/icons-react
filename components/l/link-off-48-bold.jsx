import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf09_5bop.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf09_5bop"/>`,
		"fallback": "energy-icons:link-off-48-bold",
	});
}

export default Component;
