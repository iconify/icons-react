import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chm1hdben.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chm1hdben"/>`,
		"fallback": "fa-solid:less-than-equal",
	});
}

export default Component;
