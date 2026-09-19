import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4h2p03zn.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4h2p03zn"/>`,
		"fallback": "topcoat:user",
	});
}

export default Component;
