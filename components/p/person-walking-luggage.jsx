import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2uf_k-ed.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2uf_k-ed"/>`,
		"fallback": "fa6-solid:person-walking-luggage",
	});
}

export default Component;
