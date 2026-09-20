import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z69k3lb3c.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z69k3lb3c"/>`,
		"fallback": "picon:tile",
	});
}

export default Component;
