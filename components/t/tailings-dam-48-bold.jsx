import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it4grp-4n.css';
import '../../css/h/hk3jr4mxp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it4grp-4n"/><path class="hk3jr4mxp"/>`,
		"fallback": "energy-icons:tailings-dam-48-bold",
	});
}

export default Component;
