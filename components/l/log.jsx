import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/w50s6tb_z.css';
import '../../css/j/j57v_ccdv.css';
import '../../css/x/xxkl7ut0j.css';
import '../../css/n/no2x-xgpf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="w50s6tb_z"/><path class="j57v_ccdv"/><path class="xxkl7ut0j"/><path class="no2x-xgpf"/></g>`,
		"fallback": "icon-park:log",
	});
}

export default Component;
