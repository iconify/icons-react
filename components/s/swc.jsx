import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psp5wabgn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psp5wabgn"/>`,
		"fallback": "material-icon-theme:swc",
	});
}

export default Component;
