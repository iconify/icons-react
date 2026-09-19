import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku3qf6bbs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku3qf6bbs"/>`,
		"fallback": "fa6-solid:superscript",
	});
}

export default Component;
