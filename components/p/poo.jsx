import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amk3b5brs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amk3b5brs"/>`,
		"fallback": "fa6-solid:poo",
	});
}

export default Component;
