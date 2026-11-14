import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w10dimbpl.css';
import '../../css/o/o5kz8wufu.css';
import '../../css/s/s6-3i5dyx.css';
import '../../css/w/w4jh7bb-j.css';
import '../../css/y/yzf-p7c7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="w10dimbpl"/><path class="o5kz8wufu"/><rect class="s6-3i5dyx"/><circle class="w4jh7bb-j"/><circle class="yzf-p7c7v"/></g>`,
		"fallback": "evicons:plug-ccs1",
	});
}

export default Component;
