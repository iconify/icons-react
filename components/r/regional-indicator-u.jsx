import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc85k4qnp.css';
import '../../css/t/ttjoj7bsu.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';
import '../../css/k/kse9bobif.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uc85k4qnp"/><path class="ttjoj7bsu"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><path class="kse9bobif"/></g>`,
		"fallback": "openmoji:regional-indicator-u",
	});
}

export default Component;
