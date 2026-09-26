import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yy2_6bfra.css';
import '../../css/x/xdk9_oksp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yy2_6bfra"/><path class="xdk9_oksp"/></g>`,
		"fallback": "solar:separator-horizontal-line-duotone",
	});
}

export default Component;
