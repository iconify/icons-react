import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/u/u2anyn4fc.css';
import '../../css/b/bbs3bcbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="u2anyn4fc"/><path class="bbs3bcbxz"/>`,
		"fallback": "solar:link-circle-bold-duotone",
	});
}

export default Component;
