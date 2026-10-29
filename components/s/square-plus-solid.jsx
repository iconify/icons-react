import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k550qgo1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k550qgo1i"/>`,
		"fallback": "withicons:square-plus-solid",
	});
}

export default Component;
