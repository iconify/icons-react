import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckf9o2mjh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckf9o2mjh"/>`,
		"fallback": "streamline:nature-ecology-pine-tree-plant-tree-farming-christmas-nature-plants-pine-environment",
	});
}

export default Component;
