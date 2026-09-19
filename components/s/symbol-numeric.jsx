import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmgk-1e4j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmgk-1e4j"/>`,
		"fallback": "codicon:symbol-numeric",
	});
}

export default Component;
