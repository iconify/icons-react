import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah7geomkt.css';

const viewBox = {"width":256,"height":273};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah7geomkt"/>`,
		"fallback": "thesvg-color:nhost",
	});
}

export default Component;
