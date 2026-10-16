import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfi5rmbhp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfi5rmbhp"/>`,
		"fallback": "energy-icons:line-fault-48-bold",
	});
}

export default Component;
