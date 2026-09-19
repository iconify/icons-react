import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcm2tjbsz.css';
import '../../css/d/dz7650h2w.css';
import '../../css/u/uol8h3pbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcm2tjbsz"/><path clip-rule="evenodd" class="dz7650h2w"/><path class="uol8h3pbr"/>`,
		"fallback": "griddy-icons:sparks-off",
	});
}

export default Component;
