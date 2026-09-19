import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/db2kkobsh.css';
import '../../css/g/gjfdyql1o.css';
import '../../css/l/l-iz3rbco.css';
import '../../css/r/r4o2qhbcu.css';
import '../../css/a/a7f3xu86i.css';
import '../../css/m/miuajtbvs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="db2kkobsh"/><path class="gjfdyql1o"/><ellipse class="l-iz3rbco"/><path class="r4o2qhbcu"/><ellipse class="a7f3xu86i"/><ellipse class="miuajtbvs"/></g>`,
		"fallback": "icon-park-solid:powder",
	});
}

export default Component;
