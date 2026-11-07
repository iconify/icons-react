import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rk971kb1l.css';
import '../../css/g/g68tbfbgg.css';
import '../../css/r/r9s3vab0v.css';
import '../../css/r/rrxp0rbgf.css';
import '../../css/t/t7lmbfbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="rk971kb1l"/><path class="g68tbfbgg"/></g><path class="r9s3vab0v"/><path class="rrxp0rbgf"/><path class="t7lmbfbiz"/>`,
		"fallback": "solar:mailbox-bold-duotone",
	});
}

export default Component;
