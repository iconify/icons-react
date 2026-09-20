import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bwjoyu67r.css';
import '../../css/f/fhcsjwttb.css';
import '../../css/x/x-adczucl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bwjoyu67r"/><circle class="fhcsjwttb"/><path class="x-adczucl"/></g>`,
		"fallback": "proicons:timer",
	});
}

export default Component;
