import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t26y-qb5e.css';
import '../../css/p/p6e6b6d8e.css';
import '../../css/v/v03b8abeb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t26y-qb5e"/><path class="p6e6b6d8e"/><path class="v03b8abeb"/>`,
		"fallback": "energy-icons:shuffle-48-bold",
	});
}

export default Component;
