import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umzedbqyk.css';
import '../../css/d/d0h3wsgcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umzedbqyk"/><path class="d0h3wsgcj"/>`,
		"fallback": "solar:sort-horizontal-bold",
	});
}

export default Component;
