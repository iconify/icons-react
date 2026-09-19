import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7xrwrv1i.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7xrwrv1i"/>`,
		"fallback": "whh:warningsign",
	});
}

export default Component;
