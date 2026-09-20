import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nln0yoikt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nln0yoikt"/>`,
		"fallback": "selfhst:kaunta-dark",
	});
}

export default Component;
