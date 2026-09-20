import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j73f_zbno.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j73f_zbno"/>`,
		"fallback": "selfhst:kopia-light",
	});
}

export default Component;
