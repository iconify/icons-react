import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niza58bhu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niza58bhu"/>`,
		"fallback": "icon-park:trapezoid",
	});
}

export default Component;
