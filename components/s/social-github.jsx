import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0q_w7t3c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0q_w7t3c"/>`,
		"fallback": "ion:social-github",
	});
}

export default Component;
