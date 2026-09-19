import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvpmwgqvj.css';

const viewBox = {"width":1792,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvpmwgqvj"/>`,
		"fallback": "vs:no-smoking-alt",
	});
}

export default Component;
