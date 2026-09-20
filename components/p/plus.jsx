import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fatb6os3o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fatb6os3o"/>`,
		"fallback": "simple-line-icons:plus",
	});
}

export default Component;
