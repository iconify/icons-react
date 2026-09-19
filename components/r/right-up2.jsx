import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkgktuauf.css';
import '../../css/k/k-vylvb4s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkgktuauf"/><path class="k-vylvb4s"/>`,
		"fallback": "flat-color-icons:right-up2",
	});
}

export default Component;
