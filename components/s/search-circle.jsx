import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6dlufb4l.css';
import '../../css/p/pxs3yikcr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6dlufb4l"/><circle class="pxs3yikcr"/>`,
		"fallback": "ion:search-circle",
	});
}

export default Component;
