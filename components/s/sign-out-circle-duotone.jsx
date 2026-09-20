import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbzvvub2o.css';
import '../../css/m/m162ywbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="matrix(0 -1 -1 0 22 19)" class="cbzvvub2o"/><path class="m162ywbyo"/></g>`,
		"fallback": "lets-icons:sign-out-circle-duotone",
	});
}

export default Component;
