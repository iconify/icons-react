import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih8asccla.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih8asccla"/>`,
		"fallback": "subway:mic",
	});
}

export default Component;
