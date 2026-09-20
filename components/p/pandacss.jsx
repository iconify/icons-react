import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uipgvcbdd.css';
import '../../css/c/cpiyk6e9c.css';

const viewBox = {"width":256,"height":259};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uipgvcbdd"/><path class="cpiyk6e9c"/>`,
		"fallback": "thesvg-color:pandacss",
	});
}

export default Component;
