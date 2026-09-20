import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2dutkr2l.css';
import '../../css/s/snpiwsb_l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="u2dutkr2l"/><circle class="snpiwsb_l"/>`,
		"fallback": "openmoji:red-circle",
	});
}

export default Component;
