import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr36qhbyi.css';
import '../../css/d/d_m2gcfww.css';
import '../../css/o/odw9_0-5w.css';
import '../../css/s/smgatp7ir.css';
import '../../css/r/rejaxfbru.css';
import '../../css/z/zpumeab6m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tr36qhbyi"><path class="d_m2gcfww"/><path class="odw9_0-5w"/><path class="smgatp7ir"/><path class="rejaxfbru"/><path class="zpumeab6m"/></g>`,
		"fallback": "icon-park:sailboat",
	});
}

export default Component;
