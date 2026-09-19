import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/likabwbon.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="likabwbon"/>`,
		"fallback": "pepicons:phone",
	});
}

export default Component;
