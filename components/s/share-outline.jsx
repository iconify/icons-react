import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaw9v0bqx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaw9v0bqx"/>`,
		"fallback": "famicons:share-outline",
	});
}

export default Component;
