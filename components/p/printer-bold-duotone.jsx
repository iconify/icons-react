import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpto4nbxf.css';
import '../../css/i/i3sxkkaqb.css';
import '../../css/y/yvgtcy7ig.css';
import '../../css/f/ft4ucmq2j.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kr97k8biz.css';
import '../../css/g/g5q3fvb5q.css';
import '../../css/r/r6y7sebqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bpto4nbxf"/><path class="i3sxkkaqb"/><path class="yvgtcy7ig"/><path class="ft4ucmq2j"/><g class="xtpeb-edw"><path class="kr97k8biz"/><path class="g5q3fvb5q"/><path class="r6y7sebqf"/></g>`,
		"fallback": "solar:printer-bold-duotone",
	});
}

export default Component;
