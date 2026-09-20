import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ezzhktb4f.css';
import '../../css/x/xz3ow3l6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ezzhktb4f"/><path class="xz3ow3l6i"/></g>`,
		"fallback": "reicon:simcard3",
	});
}

export default Component;
