import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm68y3b7o.css';

const viewBox = {"width":800,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm68y3b7o"/>`,
		"fallback": "thesvg-color:notary-project-dark",
	});
}

export default Component;
