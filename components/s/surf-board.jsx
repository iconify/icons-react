import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbpzzzu3k.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbpzzzu3k"/>`,
		"fallback": "lineicons:surf-board",
	});
}

export default Component;
