import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r82pb0bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r82pb0bjr"/>`,
		"fallback": "hugeicons:pot-01",
	});
}

export default Component;
