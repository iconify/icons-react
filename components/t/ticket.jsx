import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc01oya5a.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc01oya5a"/>`,
		"fallback": "whh:ticket",
	});
}

export default Component;
