import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufwom69in.css';

const viewBox = {"width":704,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufwom69in"/>`,
		"fallback": "whh:tetristwo",
	});
}

export default Component;
