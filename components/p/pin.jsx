import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bcs__wbtm.css';
import '../../css/y/yndnxvb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="bcs__wbtm"/><path class="yndnxvb3h"/></g>`,
		"fallback": "lets-icons:pin",
	});
}

export default Component;
