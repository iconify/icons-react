import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wug2whbde.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wug2whbde"/>`,
		"fallback": "streamline:nature-ecology-clover-plant-leaf-tree-flower-luck-lucky",
	});
}

export default Component;
