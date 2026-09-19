import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuen5dbbk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuen5dbbk"/>`,
		"fallback": "fa7-solid:trophy",
	});
}

export default Component;
