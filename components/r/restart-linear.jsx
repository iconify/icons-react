import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cad99bcsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cad99bcsb"/>`,
		"fallback": "solar:restart-linear",
	});
}

export default Component;
