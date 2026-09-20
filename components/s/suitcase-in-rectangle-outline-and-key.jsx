import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu4gmzb1h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu4gmzb1h"/>`,
		"fallback": "pinhead:suitcase-in-rectangle-outline-and-key",
	});
}

export default Component;
