import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qx-conzms.css';
import '../../css/t/thejpcp7b.css';
import '../../css/z/z_d8lcj7j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qx-conzms"/><path class="thejpcp7b"/><path class="z_d8lcj7j"/></g>`,
		"fallback": "icon-park-solid:massage-chair-one",
	});
}

export default Component;
