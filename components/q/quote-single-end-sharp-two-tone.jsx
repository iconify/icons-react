import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/ppslvxbah.css';
import '../../css/r/r3i798dld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ppslvxbah"/><path class="r3i798dld"/></g>`,
		"fallback": "keyline-icons:quote-single-end-sharp-two-tone",
	});
}

export default Component;
