import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhjqobksi.css';

const viewBox = {"width":800,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhjqobksi"/>`,
		"fallback": "thesvg-color:notary-project-light",
	});
}

export default Component;
