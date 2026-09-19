import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/n/nwlhoubli.css';
import '../../css/b/bwz1flb7e.css';
import '../../css/z/zpj25rudd.css';
import '../../css/o/ov1f_4e4x.css';
import '../../css/s/szutbibdk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="nwlhoubli"/><path class="bwz1flb7e"/><path class="zpj25rudd"/><path class="ov1f_4e4x"/><path class="szutbibdk"/></g>`,
		"fallback": "icon-park:uterus",
	});
}

export default Component;
