import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlj2t5bgp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlj2t5bgp"/>`,
		"fallback": "fa7-solid:star-half-alt",
	});
}

export default Component;
