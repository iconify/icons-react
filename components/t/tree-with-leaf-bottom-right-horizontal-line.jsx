import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg9qj7zwj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg9qj7zwj"/>`,
		"fallback": "roentgen:tree-with-leaf-bottom-right-horizontal-line",
	});
}

export default Component;
