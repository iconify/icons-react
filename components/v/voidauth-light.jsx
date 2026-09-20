import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_k3o6i9g.css';
import '../../css/v/vpv8vrdpm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_k3o6i9g"/><path class="vpv8vrdpm"/>`,
		"fallback": "selfhst:voidauth-light",
	});
}

export default Component;
