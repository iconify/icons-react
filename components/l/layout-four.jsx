import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/b/bxn6uzent.css';
import '../../css/x/xue3vwgre.css';
import '../../css/q/qyv0r-lwh.css';
import '../../css/k/ky0qqz3rh.css';
import '../../css/y/yrac19uez.css';
import '../../css/o/okw-psbbd.css';
import '../../css/h/hhtrs6b8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="bxn6uzent"/><path class="xue3vwgre"/><path class="qyv0r-lwh"/><path class="ky0qqz3rh"/><path class="yrac19uez"/><path class="okw-psbbd"/><path class="hhtrs6b8w"/></g>`,
		"fallback": "icon-park:layout-four",
	});
}

export default Component;
