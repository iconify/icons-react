import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijuo7pu9y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijuo7pu9y"/>`,
		"fallback": "fa7-solid:magic-wand-sparkles",
	});
}

export default Component;
