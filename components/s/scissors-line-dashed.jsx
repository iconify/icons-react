import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jo5-vxbeq.css';
import '../../css/q/quwbgywlv.css';
import '../../css/u/ua_0wy0kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jo5-vxbeq"/><path class="quwbgywlv"/><path class="ua_0wy0kl"/></g>`,
		"fallback": "vadivam:scissors-line-dashed",
	});
}

export default Component;
