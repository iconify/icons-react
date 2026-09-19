import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2ho1og4g.css';

const viewBox = {"width":2048,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2ho1og4g"/>`,
		"fallback": "fa:shopping-basket",
	});
}

export default Component;
