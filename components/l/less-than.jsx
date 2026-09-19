import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i48xvju3v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i48xvju3v"/>`,
		"fallback": "fa7-solid:less-than",
	});
}

export default Component;
