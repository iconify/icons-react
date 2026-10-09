import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uph6w3b8p.css';
import '../../css/q/qo92-j1px.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uph6w3b8p"/><path class="qo92-j1px"/>`,
		"fallback": "energy-icons:newspaper-48-bold",
	});
}

export default Component;
