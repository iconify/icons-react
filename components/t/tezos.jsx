import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da2ax3dpd.css';

const viewBox = {"width":47,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da2ax3dpd"/>`,
		"fallback": "thesvg-color:tezos",
	});
}

export default Component;
