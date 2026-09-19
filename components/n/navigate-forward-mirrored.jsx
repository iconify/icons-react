import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcg4mstgt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcg4mstgt"/>`,
		"fallback": "fluent-mdl2:navigate-forward-mirrored",
	});
}

export default Component;
