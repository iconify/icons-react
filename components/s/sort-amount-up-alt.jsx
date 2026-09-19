import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-gpj2v9x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-gpj2v9x"/>`,
		"fallback": "fa-solid:sort-amount-up-alt",
	});
}

export default Component;
