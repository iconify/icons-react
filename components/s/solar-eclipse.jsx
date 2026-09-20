import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f06ytdb_x.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f06ytdb_x"/>`,
		"fallback": "wi:solar-eclipse",
	});
}

export default Component;
