import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl-bt9n6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl-bt9n6h"/>`,
		"fallback": "icon-park-outline:rs-male",
	});
}

export default Component;
