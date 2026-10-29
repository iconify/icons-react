import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sdi9acbkd.css';
import '../../css/z/zu7t2wbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sdi9acbkd"/><path class="wm-a zu7t2wbxf"/></g>`,
		"fallback": "withicons:users",
	});
}

export default Component;
