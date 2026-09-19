import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnfrt2bmc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnfrt2bmc"/>`,
		"fallback": "fluent-emoji-high-contrast:umbrella",
	});
}

export default Component;
