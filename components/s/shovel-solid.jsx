import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xb0crex0f.css';
import '../../css/b/btpicf-nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xb0crex0f"/><path class="btpicf-nh wm-a"/></g>`,
		"fallback": "withicons:shovel-solid",
	});
}

export default Component;
