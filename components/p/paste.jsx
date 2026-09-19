import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s87flsbbb.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s87flsbbb"/>`,
		"fallback": "fa-solid:paste",
	});
}

export default Component;
