import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vat4d3csq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vat4d3csq"/>`,
		"fallback": "carbon:sailboat-coastal",
	});
}

export default Component;
