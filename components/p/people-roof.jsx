import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igc3gkbwu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igc3gkbwu"/>`,
		"fallback": "fa7-solid:people-roof",
	});
}

export default Component;
