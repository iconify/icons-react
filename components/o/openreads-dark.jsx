import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk3kyxb9l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk3kyxb9l"/>`,
		"fallback": "selfhst:openreads-dark",
	});
}

export default Component;
