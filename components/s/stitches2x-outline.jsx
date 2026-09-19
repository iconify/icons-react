import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk7lobb8j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk7lobb8j"/>`,
		"fallback": "healthicons:stitches2x-outline",
	});
}

export default Component;
