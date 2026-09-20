import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo8oo-9-t.css';
import '../../css/h/h3xx9zf8k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo8oo-9-t"/><path class="h3xx9zf8k"/>`,
		"fallback": "selfhst:profilarr-light",
	});
}

export default Component;
