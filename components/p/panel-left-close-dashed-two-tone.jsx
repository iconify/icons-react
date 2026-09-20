import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ml1zq97yw.css';
import '../../css/y/y0wdx0w6y.css';
import '../../css/v/vmayczbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ml1zq97yw"/><path class="y0wdx0w6y"/><path class="vmayczbrg"/></g>`,
		"fallback": "keyline-icons:panel-left-close-dashed-two-tone",
	});
}

export default Component;
