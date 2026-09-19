import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/n/nh7mpvbel.css';
import '../../css/m/mh0xd-bff.css';
import '../../css/s/sxgl_euno.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="nh7mpvbel"/><path class="mh0xd-bff"/><path class="sxgl_euno"/></g>`,
		"fallback": "icon-park:speaker",
	});
}

export default Component;
