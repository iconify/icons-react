import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unqzfdcpy.css';
import '../../css/p/pqf5v6bke.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unqzfdcpy"/><path class="pqf5v6bke"/>`,
		"fallback": "energy-icons:sort-asc-48",
	});
}

export default Component;
