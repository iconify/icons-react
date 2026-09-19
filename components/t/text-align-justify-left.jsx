import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrai_n05g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrai_n05g"/>`,
		"fallback": "hugeicons:text-align-justify-left",
	});
}

export default Component;
