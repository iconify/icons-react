import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy4hb8lfe.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy4hb8lfe"/>`,
		"fallback": "whh:pigpene",
	});
}

export default Component;
