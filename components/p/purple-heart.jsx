import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2jwnnbyn.css';
import '../../css/t/tqz5znvkx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2jwnnbyn"/><path class="tqz5znvkx"/>`,
		"fallback": "openmoji:purple-heart",
	});
}

export default Component;
