import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rriodnwoz.css';
import '../../css/r/r1y0urzis.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rriodnwoz"/><circle class="r1y0urzis"/>`,
		"fallback": "ooui:network",
	});
}

export default Component;
