import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d822ibkfm.css';
import '../../css/p/pmvqjsbun.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d822ibkfm"/><path class="pmvqjsbun"/>`,
		"fallback": "energy-icons:map-route-48-bold",
	});
}

export default Component;
