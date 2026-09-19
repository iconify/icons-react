import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8me2xqmd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8me2xqmd"/>`,
		"fallback": "fluent-mdl2:snowflake",
	});
}

export default Component;
