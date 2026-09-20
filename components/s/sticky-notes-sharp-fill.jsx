import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wuu1xwb6p.css';
import '../../css/x/xe6tfdcfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wuu1xwb6p"/><path clip-rule="evenodd" class="xe6tfdcfq"/></g>`,
		"fallback": "keyline-icons:sticky-notes-sharp-fill",
	});
}

export default Component;
