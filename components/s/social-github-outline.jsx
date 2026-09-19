import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdr_w8b1f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdr_w8b1f"/>`,
		"fallback": "ion:social-github-outline",
	});
}

export default Component;
