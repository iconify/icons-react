import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtli1d3xo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtli1d3xo"/>`,
		"fallback": "pinhead:medal-ribbon-with-circle",
	});
}

export default Component;
