import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0pw5q8ac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0pw5q8ac"/>`,
		"fallback": "icon-park-outline:waves-left",
	});
}

export default Component;
