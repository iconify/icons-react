import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/ymwuqkrmm.css';
import '../../css/m/mdnzfy8ny.css';
import '../../css/e/e9_804b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ymwuqkrmm"/><path class="mdnzfy8ny"/><path class="e9_804b6c"/></g>`,
		"fallback": "keyline-icons:pen-off-sharp-two-tone",
	});
}

export default Component;
