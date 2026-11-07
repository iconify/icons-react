import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c78l8sbth.css';
import '../../css/g/go0njccyz.css';
import '../../css/c/ccm11mbdl.css';
import '../../css/r/rsrhfac5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c78l8sbth"/><path class="go0njccyz"/><path class="ccm11mbdl"/><path class="rsrhfac5n"/></g>`,
		"fallback": "solar:volume-cross-linear",
	});
}

export default Component;
