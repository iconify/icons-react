import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye0wxlu9j.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye0wxlu9j"/>`,
		"fallback": "fa-solid:minus",
	});
}

export default Component;
