import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy6jndwpk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy6jndwpk"/>`,
		"fallback": "qlementine-icons:mandolin-16",
	});
}

export default Component;
