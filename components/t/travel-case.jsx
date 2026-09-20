import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na9r72qao.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na9r72qao"/>`,
		"fallback": "zondicons:travel-case",
	});
}

export default Component;
