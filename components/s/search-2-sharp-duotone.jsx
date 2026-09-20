import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/knubpbc0y.css';
import '../../css/c/cmr3pbmva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="knubpbc0y"/><path class="cmr3pbmva"/></g>`,
		"fallback": "keyline-icons:search-2-sharp-duotone",
	});
}

export default Component;
