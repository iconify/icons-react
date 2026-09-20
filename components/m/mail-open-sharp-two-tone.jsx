import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/ro89z15uz.css';
import '../../css/f/flnna2b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ro89z15uz"/><path class="flnna2b8j"/></g>`,
		"fallback": "keyline-icons:mail-open-sharp-two-tone",
	});
}

export default Component;
