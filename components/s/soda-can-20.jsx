import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g113u0-1c.css';
import '../../css/m/m8xzmqmih.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g113u0-1c"/><path class="m8xzmqmih"/>`,
		"fallback": "energy-icons:soda-can-20",
	});
}

export default Component;
