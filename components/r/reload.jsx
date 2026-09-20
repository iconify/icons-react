import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufrhj6b5b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufrhj6b5b"/>`,
		"fallback": "zondicons:reload",
	});
}

export default Component;
