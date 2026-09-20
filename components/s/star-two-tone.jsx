import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gvsbrmb7s.css';
import '../../css/m/mmxijrbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gvsbrmb7s"/><path class="mmxijrbgu"/></g>`,
		"fallback": "keyline-icons:star-two-tone",
	});
}

export default Component;
