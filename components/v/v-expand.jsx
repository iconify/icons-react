import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq8js-0ub.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq8js-0ub"/>`,
		"fallback": "fad:v-expand",
	});
}

export default Component;
