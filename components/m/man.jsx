import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpx8-5bte.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpx8-5bte"/>`,
		"fallback": "fluent-emoji-high-contrast:man",
	});
}

export default Component;
