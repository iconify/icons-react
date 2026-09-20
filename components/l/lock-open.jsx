import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8-5pybak.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8-5pybak"/>`,
		"fallback": "memory:lock-open",
	});
}

export default Component;
