import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1fidrk0g.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1fidrk0g"/>`,
		"fallback": "el:usd",
	});
}

export default Component;
