import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-_ea2b1p.css';

const viewBox = {"width":1024,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-_ea2b1p"/>`,
		"fallback": "fa:thermometer-half",
	});
}

export default Component;
