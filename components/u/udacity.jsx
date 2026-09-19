import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdp0fsn3x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdp0fsn3x"/>`,
		"fallback": "cib:udacity",
	});
}

export default Component;
