import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw0wsk98j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw0wsk98j"/>`,
		"fallback": "icon-park-outline:trapezoid",
	});
}

export default Component;
