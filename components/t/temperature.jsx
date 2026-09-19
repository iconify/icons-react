import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-f499btb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-f499btb"/>`,
		"fallback": "carbon:temperature",
	});
}

export default Component;
