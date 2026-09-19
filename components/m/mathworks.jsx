import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8877ob4s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8877ob4s"/>`,
		"fallback": "cib:mathworks",
	});
}

export default Component;
