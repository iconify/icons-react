import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl66i7bqg.css';
import '../../css/x/xvg_63bwk.css';
import '../../css/h/heu77aclb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cl66i7bqg"/><path class="xvg_63bwk"/><path class="heu77aclb"/>`,
		"fallback": "solar:magnifier-close-bold-duotone",
	});
}

export default Component;
