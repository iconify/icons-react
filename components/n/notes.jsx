import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/k/kgtfhz94h.css';
import '../../css/s/smdm4abnm.css';
import '../../css/u/u8vdedb1l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="kgtfhz94h"/><path class="smdm4abnm"/><path class="u8vdedb1l"/></g>`,
		"fallback": "icon-park:notes",
	});
}

export default Component;
