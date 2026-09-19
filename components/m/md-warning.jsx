import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa4n3fbck.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa4n3fbck"/>`,
		"fallback": "ion:md-warning",
	});
}

export default Component;
