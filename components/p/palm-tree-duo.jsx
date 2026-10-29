import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t8smxt8xu.css';
import '../../css/z/zzoxknzcb.css';
import '../../css/q/qcfnobbty.css';
import '../../css/m/mm2szcbmu.css';
import '../../css/x/x8-a5_dkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t8smxt8xu"/><path class="zzoxknzcb"/><path class="qcfnobbty wm-a"/><path class="mm2szcbmu"/><path class="x8-a5_dkh"/></g>`,
		"fallback": "withicons:palm-tree-duo",
	});
}

export default Component;
