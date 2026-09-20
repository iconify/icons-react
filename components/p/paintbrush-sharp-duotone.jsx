import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z095i3bvc.css';
import '../../css/h/hiwtpra8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="z095i3bvc"/><path class="hiwtpra8u"/></g>`,
		"fallback": "keyline-icons:paintbrush-sharp-duotone",
	});
}

export default Component;
