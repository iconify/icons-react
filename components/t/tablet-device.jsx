import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gurl2ypet.css';
import '../../css/m/mw6_31bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="gurl2ypet"/><path class="mw6_31bui"/></g>`,
		"fallback": "akar-icons:tablet-device",
	});
}

export default Component;
