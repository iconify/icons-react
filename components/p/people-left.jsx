import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c543isbeu.css';
import '../../css/o/ok1ev1wiw.css';
import '../../css/y/ysq3he5vq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c543isbeu"/><path class="ok1ev1wiw"/><path class="ysq3he5vq"/></g>`,
		"fallback": "icon-park-solid:people-left",
	});
}

export default Component;
