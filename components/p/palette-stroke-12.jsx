import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu_10h8-w.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu_10h8-w"/>`,
		"fallback": "garden:palette-stroke-12",
	});
}

export default Component;
