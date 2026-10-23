import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u8e6_jcrb.css';
import '../../css/d/dnsnwocfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u8e6_jcrb"/><path class="dnsnwocfm"/></g>`,
		"fallback": "vadivam:iteration-ccw",
	});
}

export default Component;
