import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zarrr9bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zarrr9bte"/>`,
		"fallback": "noviair-light:table-check",
	});
}

export default Component;
