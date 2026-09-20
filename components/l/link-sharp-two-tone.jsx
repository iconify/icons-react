import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/ucfd6kbrg.css';
import '../../css/f/fqtveacvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ucfd6kbrg"/><path class="fqtveacvw"/></g>`,
		"fallback": "keyline-icons:link-sharp-two-tone",
	});
}

export default Component;
