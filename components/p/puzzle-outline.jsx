import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv39e_b2i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv39e_b2i"/>`,
		"fallback": "lsicon:puzzle-outline",
	});
}

export default Component;
