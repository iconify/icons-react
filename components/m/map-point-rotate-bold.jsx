import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogd2nrbqw.css';
import '../../css/i/i2rrj-bgy.css';
import '../../css/a/amjowyqts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogd2nrbqw"/><path class="i2rrj-bgy"/><path clip-rule="evenodd" class="amjowyqts"/>`,
		"fallback": "solar:map-point-rotate-bold",
	});
}

export default Component;
