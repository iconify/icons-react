import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj7jzqbuj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj7jzqbuj"/>`,
		"fallback": "selfhst:jellyswarrm-light",
	});
}

export default Component;
