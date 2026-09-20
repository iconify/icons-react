import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/banko5b2z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="banko5b2z"/>`,
		"fallback": "simple-line-icons:playlist",
	});
}

export default Component;
