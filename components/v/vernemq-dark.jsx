import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-bs936qw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-bs936qw"/>`,
		"fallback": "selfhst:vernemq-dark",
	});
}

export default Component;
