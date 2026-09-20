import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cswrvyb1c.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cswrvyb1c"/>`,
		"fallback": "jam:pin",
	});
}

export default Component;
