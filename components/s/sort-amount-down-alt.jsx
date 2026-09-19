import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv815x65j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv815x65j"/>`,
		"fallback": "fa-solid:sort-amount-down-alt",
	});
}

export default Component;
