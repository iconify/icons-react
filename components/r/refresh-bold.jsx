import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdf92f1xn.css';
import '../../css/b/b3iiu6hfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdf92f1xn"/><path class="b3iiu6hfl"/>`,
		"fallback": "solar:refresh-bold",
	});
}

export default Component;
