import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/d/dkii0rb8z.css';
import '../../css/n/np_5idvxc.css';
import '../../css/y/yma165b7x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="dkii0rb8z"/><path class="np_5idvxc"/><path class="yma165b7x"/></g>`,
		"fallback": "icon-park:layout-two",
	});
}

export default Component;
