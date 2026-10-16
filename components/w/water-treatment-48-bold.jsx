import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g15t1bclt.css';
import '../../css/j/j0qwephmf.css';
import '../../css/q/qq-n_ibfl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g15t1bclt"/><path class="j0qwephmf"/><path class="qq-n_ibfl"/>`,
		"fallback": "energy-icons:water-treatment-48-bold",
	});
}

export default Component;
