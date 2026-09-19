import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvyzhcstg.css';

const viewBox = {"width":795,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvyzhcstg"/>`,
		"fallback": "ls:view",
	});
}

export default Component;
