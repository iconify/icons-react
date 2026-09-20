import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzifvdi3c.css';

const viewBox = {"width":256,"height":263};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzifvdi3c"/>`,
		"fallback": "thesvg-color:unity-light",
	});
}

export default Component;
