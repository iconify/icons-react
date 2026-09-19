import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1j879b-l.css';
import '../../css/p/pg468fg1k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1j879b-l"/><path class="pg468fg1k"/>`,
		"fallback": "carbon:rain-drizzle",
	});
}

export default Component;
