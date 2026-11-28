import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq7yxmbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq7yxmbdp"/>`,
		"fallback": "noviair-light:party-popper-star",
	});
}

export default Component;
