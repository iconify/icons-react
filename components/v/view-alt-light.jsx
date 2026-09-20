import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m10ymsugb.css';
import '../../css/l/lk23hlmll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="m10ymsugb"/><path class="lk23hlmll"/></g>`,
		"fallback": "lets-icons:view-alt-light",
	});
}

export default Component;
