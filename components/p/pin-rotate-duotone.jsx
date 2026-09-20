import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vzodenkfm.css';
import '../../css/n/nl537an2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vzodenkfm"/><path class="nl537an2f"/></g>`,
		"fallback": "reicon:pin-rotate-duotone",
	});
}

export default Component;
