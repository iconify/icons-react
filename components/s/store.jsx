import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teanu_nhg.css';

const viewBox = {"width":616,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teanu_nhg"/>`,
		"fallback": "fa-solid:store",
	});
}

export default Component;
