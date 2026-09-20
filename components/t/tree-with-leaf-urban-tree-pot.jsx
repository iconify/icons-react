import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5_bhwb0y.css';
import '../../css/k/ke0zg7b_d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5_bhwb0y"/><path class="ke0zg7b_d"/>`,
		"fallback": "roentgen:tree-with-leaf-urban-tree-pot",
	});
}

export default Component;
