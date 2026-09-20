import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kakrw9-lf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kakrw9-lf"/>`,
		"fallback": "uiw:pay-circle-o",
	});
}

export default Component;
