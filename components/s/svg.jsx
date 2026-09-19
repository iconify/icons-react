import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uce955b0i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uce955b0i"/>`,
		"fallback": "cib:svg",
	});
}

export default Component;
