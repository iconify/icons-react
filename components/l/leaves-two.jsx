import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/un_p27bde.css';
import '../../css/k/knxvrwb6y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="un_p27bde"/><path class="knxvrwb6y"/></g>`,
		"fallback": "icon-park-solid:leaves-two",
	});
}

export default Component;
