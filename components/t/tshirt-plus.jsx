import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow2oqr99c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow2oqr99c"/>`,
		"fallback": "noviair:tshirt-plus",
	});
}

export default Component;
