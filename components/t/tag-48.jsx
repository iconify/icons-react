import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrjnvkbuz.css';
import '../../css/n/nl3t421aj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrjnvkbuz"/><path class="nl3t421aj"/>`,
		"fallback": "energy-icons:tag-48",
	});
}

export default Component;
