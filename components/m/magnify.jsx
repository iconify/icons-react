import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elkmmg68c.css';
import '../../css/y/y3-1k1brf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs/><path class="elkmmg68c"/><path class="y3-1k1brf"/>`,
		"fallback": "carbon:magnify",
	});
}

export default Component;
