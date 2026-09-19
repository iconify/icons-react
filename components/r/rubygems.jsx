import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5wakvbmm.css';

const viewBox = {"width":447,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5wakvbmm"/>`,
		"fallback": "file-icons:rubygems",
	});
}

export default Component;
