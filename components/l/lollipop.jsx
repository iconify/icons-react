import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b7-zp0bwh.css';
import '../../css/u/u4r_v2bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b7-zp0bwh"/><path class="u4r_v2bcl"/></g>`,
		"fallback": "vadivam:lollipop",
	});
}

export default Component;
