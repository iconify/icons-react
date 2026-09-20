import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkn6dvbic.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkn6dvbic"/>`,
		"fallback": "pinhead:pickup-truck-with-raised-hood",
	});
}

export default Component;
