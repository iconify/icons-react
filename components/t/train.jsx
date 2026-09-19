import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzlyre6gz.css';

const viewBox = {"width":579,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzlyre6gz"/>`,
		"fallback": "whh:train",
	});
}

export default Component;
