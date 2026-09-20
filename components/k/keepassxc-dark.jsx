import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl-m4ovdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl-m4ovdc"/>`,
		"fallback": "selfhst:keepassxc-dark",
	});
}

export default Component;
