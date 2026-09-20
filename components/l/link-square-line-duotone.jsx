import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9ln-r5qf.css';
import '../../css/h/hpk3ez1sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o9ln-r5qf"/><path class="hpk3ez1sw"/></g>`,
		"fallback": "solar:link-square-line-duotone",
	});
}

export default Component;
