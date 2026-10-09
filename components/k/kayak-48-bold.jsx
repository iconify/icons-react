import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9903qb7k.css';
import '../../css/u/uwd9spbxn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9903qb7k"/><path class="uwd9spbxn"/>`,
		"fallback": "energy-icons:kayak-48-bold",
	});
}

export default Component;
