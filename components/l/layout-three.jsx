import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/n/nbm684d5v.css';
import '../../css/c/c5j5lzb8g.css';
import '../../css/g/gyjw88vlv.css';
import '../../css/w/wdvsx9m5t.css';
import '../../css/o/oc353sfwp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="nbm684d5v"/><path class="c5j5lzb8g"/><path class="gyjw88vlv"/><path class="wdvsx9m5t"/><path class="oc353sfwp"/></g>`,
		"fallback": "icon-park:layout-three",
	});
}

export default Component;
