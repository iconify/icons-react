import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z_nh4rb9k.css';
import '../../css/i/isncyc_nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k z_nh4rb9k"/><path class="isncyc_nj wm-a"/></g>`,
		"fallback": "withicons-bauhaus:stroller",
	});
}

export default Component;
