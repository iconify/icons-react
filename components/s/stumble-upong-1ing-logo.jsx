import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wt5yy9frr.css';
import '../../css/q/qi2p1ob0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="to-5kdesz"><path class="wt5yy9frr"/><path class="qi2p1ob0h"/></g>`,
		"fallback": "streamline-logos:stumble-upong-1ing-logo",
	});
}

export default Component;
