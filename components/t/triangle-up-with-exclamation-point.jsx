import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x16itb56c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x16itb56c"/>`,
		"fallback": "pinhead:triangle-up-with-exclamation-point",
	});
}

export default Component;
