import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcwlmbnsz.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcwlmbnsz"/>`,
		"fallback": "whh:squarei",
	});
}

export default Component;
