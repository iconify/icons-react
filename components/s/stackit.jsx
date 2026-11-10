import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju3_qt3um.css';
import '../../css/j/jlb1dbrgm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju3_qt3um"/><path class="jlb1dbrgm"/>`,
		"fallback": "devicon:stackit",
	});
}

export default Component;
