import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9wzftb8q.css';
import '../../css/a/a11hv0l_f.css';
import '../../css/v/v2yh4c2xt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9wzftb8q"/><path class="a11hv0l_f"/><path class="v2yh4c2xt"/>`,
		"fallback": "openmoji:raising-hands-medium-dark-skin-tone",
	});
}

export default Component;
