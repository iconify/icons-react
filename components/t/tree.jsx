import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg8otqbpd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg8otqbpd"/>`,
		"fallback": "f7:tree",
	});
}

export default Component;
