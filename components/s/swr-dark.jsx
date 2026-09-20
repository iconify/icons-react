import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xafgut1dg.css';

const viewBox = {"width":2200,"height":2200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xafgut1dg"/>`,
		"fallback": "thesvg-color:swr-dark",
	});
}

export default Component;
