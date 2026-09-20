import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aromwjbif.css';
import '../../css/g/g7hfecbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aromwjbif"/><path class="g7hfecbnh"/></g>`,
		"fallback": "keyline-icons:ship-fill",
	});
}

export default Component;
