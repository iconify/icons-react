import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y063tcl2a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y063tcl2a"/>`,
		"fallback": "temaki:tree-row",
	});
}

export default Component;
