import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkhr1kw2c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkhr1kw2c"/>`,
		"fallback": "pinhead:open-envelope-right-with-pound",
	});
}

export default Component;
