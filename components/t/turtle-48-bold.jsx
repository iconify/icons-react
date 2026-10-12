import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffeqeoqqx.css';
import '../../css/x/x5va96bez.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffeqeoqqx"/><path class="x5va96bez"/>`,
		"fallback": "energy-icons:turtle-48-bold",
	});
}

export default Component;
