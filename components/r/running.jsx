import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfi69eb9j.css';

const viewBox = {"width":416,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfi69eb9j"/>`,
		"fallback": "fa-solid:running",
	});
}

export default Component;
