import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddmmyzkas.css';
import '../../css/l/lz0rx605g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ddmmyzkas"/><path class="lz0rx605g"/>`,
		"fallback": "solar:revote-bold",
	});
}

export default Component;
