import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4yb77pnw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4yb77pnw"/>`,
		"fallback": "oi:reload",
	});
}

export default Component;
