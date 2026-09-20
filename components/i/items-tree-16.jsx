import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmx29iyrb.css';
import '../../css/g/g-mtc6bxp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vmx29iyrb"/><path class="g-mtc6bxp"/>`,
		"fallback": "qlementine-icons:items-tree-16",
	});
}

export default Component;
