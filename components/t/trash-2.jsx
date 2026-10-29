import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v0dm3wykm.css';
import '../../css/y/yx1sa4b2k.css';
import '../../css/y/yuzb_sbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v0dm3wykm"/><path class="yx1sa4b2k"/><path class="yuzb_sbgj"/></g>`,
		"fallback": "withicons-bauhaus:trash-2",
	});
}

export default Component;
