import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d_235jbio.css';
import '../../css/l/l8_os_b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="d_235jbio"/><path class="l8_os_b3i"/></g>`,
		"fallback": "keyline-icons:search-2-sparkles-sharp",
	});
}

export default Component;
