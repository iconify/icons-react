import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m808873ny.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m808873ny"/>`,
		"fallback": "energy-icons:tsunami-20-bold",
	});
}

export default Component;
