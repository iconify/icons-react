import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2s2idbod.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2s2idbod"/>`,
		"fallback": "pinhead:rectangle-outline",
	});
}

export default Component;
