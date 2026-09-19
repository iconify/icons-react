import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6t63kbtc.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6t63kbtc"/>`,
		"fallback": "whh:j",
	});
}

export default Component;
