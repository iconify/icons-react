import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o39d96b_o.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o39d96b_o"/>`,
		"fallback": "fa6-solid:train-subway",
	});
}

export default Component;
