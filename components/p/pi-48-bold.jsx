import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg50c1boz.css';
import '../../css/w/wu5hif90s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg50c1boz"/><path class="wu5hif90s"/>`,
		"fallback": "energy-icons:pi-48-bold",
	});
}

export default Component;
