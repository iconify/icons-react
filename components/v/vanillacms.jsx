import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1bf2ch-l.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1bf2ch-l"/>`,
		"fallback": "whh:vanillacms",
	});
}

export default Component;
