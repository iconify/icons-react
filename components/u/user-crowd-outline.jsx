import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0-k8xb8r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0-k8xb8r"/>`,
		"fallback": "lsicon:user-crowd-outline",
	});
}

export default Component;
