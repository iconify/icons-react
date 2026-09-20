import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnxu-lb8m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnxu-lb8m"/>`,
		"fallback": "pinhead:open-envelope-right-with-peso",
	});
}

export default Component;
