import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjb74fbfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjb74fbfd"/>`,
		"fallback": "icon-park-outline:star",
	});
}

export default Component;
