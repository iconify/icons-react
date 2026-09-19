import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl-k7xb2y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl-k7xb2y"/>`,
		"fallback": "icon-park-outline:page-template",
	});
}

export default Component;
