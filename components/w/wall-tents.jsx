import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8kv29e8d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8kv29e8d"/>`,
		"fallback": "pinhead:wall-tents",
	});
}

export default Component;
