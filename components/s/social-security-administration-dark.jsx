import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fymm-cfdb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fymm-cfdb"/>`,
		"fallback": "selfhst:social-security-administration-dark",
	});
}

export default Component;
