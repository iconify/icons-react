import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy0u-nfrc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy0u-nfrc"/>`,
		"fallback": "carbon:uv-index-alt",
	});
}

export default Component;
