import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6jk1mbqh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6jk1mbqh"/>`,
		"fallback": "game-icons:scroll-quill",
	});
}

export default Component;
