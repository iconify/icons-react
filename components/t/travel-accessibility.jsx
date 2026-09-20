import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr32yxbru.css';
import '../../css/a/aa4zmqbdz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr32yxbru"/><path clip-rule="evenodd" class="aa4zmqbdz"/>`,
		"fallback": "streamline-block:travel-accessibility",
	});
}

export default Component;
