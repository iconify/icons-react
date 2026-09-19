import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c543isbeu.css';
import '../../css/b/bdousj5fz.css';
import '../../css/y/ysq3he5vq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c543isbeu"/><path class="bdousj5fz"/><path class="ysq3he5vq"/></g>`,
		"fallback": "icon-park-solid:people-speak",
	});
}

export default Component;
