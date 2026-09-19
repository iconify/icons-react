import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng3z04b6k.css';
import '../../css/l/l2gxg7bxh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng3z04b6k"/><path class="l2gxg7bxh"/>`,
		"fallback": "gis:map-time",
	});
}

export default Component;
