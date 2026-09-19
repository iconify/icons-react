import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k90nvltuk.css';
import '../../css/w/w678ji4gs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k90nvltuk"/><path class="w678ji4gs"/>`,
		"fallback": "ion:md-wallet",
	});
}

export default Component;
