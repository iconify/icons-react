import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeq8--beu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeq8--beu"/>`,
		"fallback": "zondicons:view-show",
	});
}

export default Component;
