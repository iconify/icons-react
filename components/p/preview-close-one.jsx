import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/han2_ccwu.css';
import '../../css/m/meemeybxw.css';
import '../../css/t/tlqqge7uq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="han2_ccwu"/><path class="meemeybxw"/><path class="tlqqge7uq"/></g>`,
		"fallback": "icon-park:preview-close-one",
	});
}

export default Component;
