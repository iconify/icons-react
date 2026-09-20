import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b52cj7bic.css';
import '../../css/d/de917sbiy.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b52cj7bic"/><path class="de917sbiy"/>`,
		"fallback": "thesvg-color:monistic-logo",
	});
}

export default Component;
