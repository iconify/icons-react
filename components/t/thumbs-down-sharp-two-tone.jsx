import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nx6omkupu.css';
import '../../css/x/xxy_fi27s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="nx6omkupu"/><path class="xxy_fi27s"/></g>`,
		"fallback": "keyline-icons:thumbs-down-sharp-two-tone",
	});
}

export default Component;
