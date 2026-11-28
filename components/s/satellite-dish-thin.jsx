import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyxml4bzt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyxml4bzt"/>`,
		"fallback": "pullo:satellite-dish-thin",
	});
}

export default Component;
