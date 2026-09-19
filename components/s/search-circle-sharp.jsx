import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4pi1pb2y.css';
import '../../css/p/pxs3yikcr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4pi1pb2y"/><circle class="pxs3yikcr"/>`,
		"fallback": "famicons:search-circle-sharp",
	});
}

export default Component;
