import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm098ccxq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm098ccxq"/>`,
		"fallback": "energy-icons:waterfall-48-bold",
	});
}

export default Component;
