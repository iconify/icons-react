import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_30unbpc.css';

const viewBox = {"width":1408,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_30unbpc"/>`,
		"fallback": "fa:trash-o",
	});
}

export default Component;
