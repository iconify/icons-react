import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi9ey6-_v.css';
import '../../css/d/ddxiy4bwd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi9ey6-_v"/><path class="ddxiy4bwd"/>`,
		"fallback": "energy-icons:superscript-48-bold",
	});
}

export default Component;
