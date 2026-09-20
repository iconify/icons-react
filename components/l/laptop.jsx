import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-1u6ubtf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-1u6ubtf"/>`,
		"fallback": "pinhead:laptop",
	});
}

export default Component;
