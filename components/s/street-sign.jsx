import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2cy5jb9t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2cy5jb9t"/>`,
		"fallback": "streamline:street-sign",
	});
}

export default Component;
