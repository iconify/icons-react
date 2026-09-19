import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frf7sf2bz.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frf7sf2bz"/>`,
		"fallback": "whh:quoteup",
	});
}

export default Component;
