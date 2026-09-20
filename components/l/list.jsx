import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um9_oznhn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um9_oznhn"/>`,
		"fallback": "zondicons:list",
	});
}

export default Component;
