import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pffvj1x9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pffvj1x9j"/>`,
		"fallback": "weui:share-outlined",
	});
}

export default Component;
