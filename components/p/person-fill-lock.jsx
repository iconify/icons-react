import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz8o_0b2g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz8o_0b2g"/>`,
		"fallback": "bi:person-fill-lock",
	});
}

export default Component;
