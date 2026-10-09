import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b97769rea.css';
import '../../css/n/nssl3jbor.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b97769rea"/><path class="nssl3jbor"/>`,
		"fallback": "energy-icons:sort-asc-48-bold",
	});
}

export default Component;
