import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rva42cbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rva42cbqa"/>`,
		"fallback": "circum:signpost-r-1",
	});
}

export default Component;
