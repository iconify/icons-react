import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5tu98qwg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5tu98qwg"/>`,
		"fallback": "picon:map",
	});
}

export default Component;
