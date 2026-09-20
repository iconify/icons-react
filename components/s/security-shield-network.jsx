import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uww2inb7w.css';
import '../../css/t/tri5-3hsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uww2inb7w"/><path class="tri5-3hsp"/>`,
		"fallback": "streamline-freehand:security-shield-network",
	});
}

export default Component;
