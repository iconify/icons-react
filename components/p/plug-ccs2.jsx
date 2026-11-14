import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bpniqnprj.css';
import '../../css/x/xj21phzxc.css';
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
		"content": `<g class="hntgybcog"><path class="bpniqnprj"/><path class="xj21phzxc"/><rect class="s6-3i5dyx"/><circle class="w4jh7bb-j"/><circle class="yzf-p7c7v"/></g>`,
		"fallback": "evicons:plug-ccs2",
	});
}

export default Component;
