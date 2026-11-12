import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fcn_ur_9p.css';
import '../../css/a/at2ef2b1t.css';
import '../../css/f/fzf5idbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fcn_ur_9p"/><path class="at2ef2b1t"/><path class="fzf5idbxc"/></g>`,
		"fallback": "tabler:shopping-cart-key",
	});
}

export default Component;
