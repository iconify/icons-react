import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/knubpbc0y.css';
import '../../css/n/n9lqcmdyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="knubpbc0y"/><path class="n9lqcmdyn"/></g>`,
		"fallback": "keyline-icons:search-2-sharp-two-tone",
	});
}

export default Component;
