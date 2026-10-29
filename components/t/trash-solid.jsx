import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bs6ebgbmd.css';
import '../../css/v/vxc7txxst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bs6ebgbmd"/><path class="vxc7txxst wm-a"/></g>`,
		"fallback": "withicons:trash-solid",
	});
}

export default Component;
