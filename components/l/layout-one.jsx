import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/a/am1igebwo.css';
import '../../css/y/yeo6-kifb.css';
import '../../css/q/qyy9o_btf.css';
import '../../css/l/l6pgklkvy.css';
import '../../css/y/yfm2a_b8o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="am1igebwo"/><path class="yeo6-kifb"/><path class="qyy9o_btf"/><path class="l6pgklkvy"/><path class="yfm2a_b8o"/></g>`,
		"fallback": "icon-park:layout-one",
	});
}

export default Component;
