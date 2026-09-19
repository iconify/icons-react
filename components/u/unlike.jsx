import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zgjfmt9gx.css';
import '../../css/f/fi5rhr63a.css';
import '../../css/w/wwkwm_vbw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="zgjfmt9gx"/><path class="fi5rhr63a"/><path class="wwkwm_vbw"/></g>`,
		"fallback": "icon-park:unlike",
	});
}

export default Component;
