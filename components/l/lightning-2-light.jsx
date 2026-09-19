import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1417k-va.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1417k-va"/>`,
		"fallback": "iconamoon:lightning-2-light",
	});
}

export default Component;
