import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-m8bqbxn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-m8bqbxn"/>`,
		"fallback": "selfhst:truenas-scale-light",
	});
}

export default Component;
