import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_5qwt2go.css';
import '../../css/b/b8j_7x21u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_5qwt2go"/><path class="b8j_7x21u"/>`,
		"fallback": "ion:musical-notes-outline",
	});
}

export default Component;
