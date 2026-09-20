import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf7wu2l-p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf7wu2l-p"/>`,
		"fallback": "ooui:layout-ltr",
	});
}

export default Component;
