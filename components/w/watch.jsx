import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufyq-fb6l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufyq-fb6l"/>`,
		"fallback": "carbon:watch",
	});
}

export default Component;
