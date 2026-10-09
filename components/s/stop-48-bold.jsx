import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq6s4g74y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq6s4g74y"/>`,
		"fallback": "energy-icons:stop-48-bold",
	});
}

export default Component;
