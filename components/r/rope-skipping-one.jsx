import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tajpx0a2c.css';
import '../../css/c/coj_tccxl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="tajpx0a2c"/><path class="coj_tccxl"/></g>`,
		"fallback": "icon-park-outline:rope-skipping-one",
	});
}

export default Component;
