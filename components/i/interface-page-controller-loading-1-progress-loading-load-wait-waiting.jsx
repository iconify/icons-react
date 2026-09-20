import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd0wgkb4f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd0wgkb4f"/>`,
		"fallback": "streamline:interface-page-controller-loading-1-progress-loading-load-wait-waiting",
	});
}

export default Component;
