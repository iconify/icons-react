import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j13sb7b-m.css';

const viewBox = {"width":1515,"height":1477};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j13sb7b-m"/>`,
		"fallback": "thesvg:nordea",
	});
}

export default Component;
