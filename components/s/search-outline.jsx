import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jtdcv7bbz.css';
import '../../css/d/d7ig3mx9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="jtdcv7bbz"/><path class="d7ig3mx9k"/></g>`,
		"fallback": "bitcoin-icons:search-outline",
	});
}

export default Component;
