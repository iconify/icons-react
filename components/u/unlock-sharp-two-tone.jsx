import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m97iylbud.css';
import '../../css/y/yhggpq7zf.css';
import '../../css/k/k8te4qbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="m97iylbud"/><path class="yhggpq7zf"/><path class="k8te4qbon"/></g>`,
		"fallback": "keyline-icons:unlock-sharp-two-tone",
	});
}

export default Component;
