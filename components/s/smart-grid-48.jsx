import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsjqddezd.css';
import '../../css/d/ds9x_zbhf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsjqddezd"/><path class="ds9x_zbhf"/>`,
		"fallback": "energy-icons:smart-grid-48",
	});
}

export default Component;
