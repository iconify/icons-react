import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1h7svbib.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1h7svbib"/>`,
		"fallback": "energy-icons:salad-48",
	});
}

export default Component;
