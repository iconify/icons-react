import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/ui3at1b2e.css';
import '../../css/d/dz32fvbgs.css';
import '../../css/n/nsksf78-k.css';
import '../../css/v/v8y-98bnm.css';
import '../../css/y/yd09ymsbu.css';
import '../../css/n/nat0czbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ui3at1b2e wm-shadow"/><path class="dz32fvbgs wm-shadow"/><path class="nsksf78-k"/><path class="v8y-98bnm"/><path class="yd09ymsbu"/><path class="nat0czbfp"/></g>`,
		"fallback": "withicons-brutal:users-round",
	});
}

export default Component;
