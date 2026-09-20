import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvq_hx_ln.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvq_hx_ln"/>`,
		"fallback": "selfhst:opensuse-light",
	});
}

export default Component;
