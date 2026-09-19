import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v63drczcp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v63drczcp"/>`,
		"fallback": "fluent-mdl2:rain-showers-night",
	});
}

export default Component;
