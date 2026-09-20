import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_82q38za.css';

const viewBox = {"width":17,"height":25,"left":4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_82q38za"/>`,
		"fallback": "thesvg-color:radix-ui-light",
	});
}

export default Component;
