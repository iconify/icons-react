import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/d/dpljr7bjn.css';
import '../../css/u/u034iysry.css';
import '../../css/e/el5mddb1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="dpljr7bjn"/><path class="u034iysry"/><path class="el5mddb1v"/></g>`,
		"fallback": "icon-park:left-bar",
	});
}

export default Component;
