import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3p5n_b4n.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3p5n_b4n"/>`,
		"fallback": "zmdi:playlist-plus",
	});
}

export default Component;
