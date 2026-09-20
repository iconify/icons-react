import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj88e2lso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj88e2lso"/>`,
		"fallback": "mdi-light:volume-minus",
	});
}

export default Component;
