import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yzik_ib5f.css';
import '../../css/h/heyab7big.css';
import '../../css/p/pfdln_tgy.css';
import '../../css/o/o4zzqkbgz.css';
import '../../css/m/mz6m6-b7a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yzik_ib5f"/><path clip-rule="evenodd" class="heyab7big"/><path class="pfdln_tgy"/><path clip-rule="evenodd" class="o4zzqkbgz"/><path class="mz6m6-b7a"/></g>`,
		"fallback": "pepicons:truck",
	});
}

export default Component;
