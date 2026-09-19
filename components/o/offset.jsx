import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phjcr-75y.css';
import '../../css/i/iqsh6wb7i.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phjcr-75y"/><path class="iqsh6wb7i"/>`,
		"fallback": "gis:offset",
	});
}

export default Component;
