import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sze5vjbuu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sze5vjbuu"/>`,
		"fallback": "icon-park-outline:level-seven-title",
	});
}

export default Component;
