import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp6mlgbol.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp6mlgbol"/>`,
		"fallback": "thesvg-color:pinterest",
	});
}

export default Component;
