import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv5zop4pt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv5zop4pt"/>`,
		"fallback": "fluent-mdl2:reading-mode",
	});
}

export default Component;
