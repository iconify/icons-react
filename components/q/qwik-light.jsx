import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1_2ocb6i.css';
import '../../css/z/z1wl8j83j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1_2ocb6i"/><path class="z1wl8j83j"/>`,
		"fallback": "selfhst:qwik-light",
	});
}

export default Component;
