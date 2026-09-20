import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp4mm0b8y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp4mm0b8y"/>`,
		"fallback": "raphael:rw",
	});
}

export default Component;
