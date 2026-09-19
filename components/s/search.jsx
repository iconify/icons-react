import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crvea6bkp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crvea6bkp"/>`,
		"fallback": "icons8:search",
	});
}

export default Component;
