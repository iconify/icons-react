import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1r1dsu7x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1r1dsu7x"/>`,
		"fallback": "pinhead:tree-beside-bench-with-backrest",
	});
}

export default Component;
