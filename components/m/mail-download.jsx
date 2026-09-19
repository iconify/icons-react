import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ssu614b4n.css';
import '../../css/r/rr-fynbwt.css';
import '../../css/s/ssk304bqz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ssu614b4n"/><path class="rr-fynbwt"/><path class="ssk304bqz"/></g>`,
		"fallback": "icon-park-outline:mail-download",
	});
}

export default Component;
