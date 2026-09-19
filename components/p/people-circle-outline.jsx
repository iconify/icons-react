import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anms5nb2o.css';
import '../../css/e/epn6lpbho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anms5nb2o"/><path class="epn6lpbho"/>`,
		"fallback": "famicons:people-circle-outline",
	});
}

export default Component;
