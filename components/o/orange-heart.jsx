import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-ytayb5o.css';
import '../../css/t/tqz5znvkx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-ytayb5o"/><path class="tqz5znvkx"/>`,
		"fallback": "openmoji:orange-heart",
	});
}

export default Component;
