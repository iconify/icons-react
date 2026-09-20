import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpxjk91ta.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpxjk91ta"/>`,
		"fallback": "picon:jewelry",
	});
}

export default Component;
