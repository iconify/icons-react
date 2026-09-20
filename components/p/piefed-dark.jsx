import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj90mebhl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj90mebhl"/>`,
		"fallback": "selfhst:piefed-dark",
	});
}

export default Component;
