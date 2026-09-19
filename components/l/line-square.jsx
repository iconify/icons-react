import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rultehb-v.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rultehb-v"/>`,
		"fallback": "vs:line-square",
	});
}

export default Component;
