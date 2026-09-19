import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz7kfkb-r.css';

const viewBox = {"width":88,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz7kfkb-r"/>`,
		"fallback": "zmdi:more-vert",
	});
}

export default Component;
