import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4j_jjn9j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4j_jjn9j"/>`,
		"fallback": "fa-solid:play-circle",
	});
}

export default Component;
